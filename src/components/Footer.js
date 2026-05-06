import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <span style={{color: '#fff', fontWeight: '700', fontSize: '2.4rem', letterSpacing: '2px'}}>FA</span>
            <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '4px'}}>Faizan Ali · Lahore, Pakistan</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/faizanali3n" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/Faizan3N" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
            <p>Copyright 2025. Faizan Ali. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
