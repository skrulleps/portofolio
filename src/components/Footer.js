import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LogoWeb.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navpdficon from '../assets/img/nav-pdficon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mochamedfadhlantuhairi/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/skrulleps"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/fadhlant_07/"><img src={navIcon3} alt="" /></a>
              <a href="https://drive.google.com/file/d/1L5YLsd5FMvGv8Sl1gzUPl18LeRv387j2/view?usp=sharing"><img src={navpdficon} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
