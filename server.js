require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const keys = require("./google-credentials.json"); // You need to add your Google service account credentials JSON file here

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Google Sheets setup
const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const spreadsheetId = process.env.SPREADSHEET_ID;

async function appendToSheet(data) {
  try {
    await client.authorize();
    const sheets = google.sheets({ version: "v4", auth: client });
    const resource = {
      values: [data],
    };
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E", // Adjust sheet name and range as needed
      valueInputOption: "USER_ENTERED",
      resource,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await appendToSheet([firstName, lastName, email, phone, message]);
    res.json({ code: 200, message: "Message sent successfully and added to Google Sheets" });
  } catch (error) {
    res.json({ code: 500, message: "Error sending message or adding to Google Sheets", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
