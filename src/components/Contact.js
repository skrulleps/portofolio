import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText] = useState('Send');
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6285281891051"; // Your WhatsApp number
    function getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return "Pagi";
      if (hour < 15) return "Siang";
      if (hour < 18) return "Sore";
      return "Malam";
    }

    const greetingText = getGreeting();

    const message = `Selamat ${greetingText}, saya ${formDetails.firstName} ${formDetails.lastName}.\nEmail: ${formDetails.email}.\nPesan: ${formDetails.message}.`;

    // --- Tambahkan ini untuk debugging ---
    console.log("Pesan Mentah (sebelum encode):", message);
    // --- Akhir debugging ---

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // --- Tambahkan ini untuk debugging ---
    console.log("URL yang akan dibuka:", url);
    // --- Akhir debugging ---

    window.open(url, "_blank");
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: "Pesan berhasil dibuka di WhatsApp" });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button><br></br>
                    </Col>
                  </Row>
                  {
                    status.message &&
                    <Row>
                      <Col size={12} className="px-1">
                        <div style={{
                          marginTop: '10px',
                          padding: '10px',
                          borderRadius: '5px',
                          color: status.success ? 'green' : 'red',
                          backgroundColor: status.success ? '#d4edda' : '#f8d7da',
                          border: status.success ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {status.message}
                        </div>
                      </Col>
                    </Row>
                  }
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
