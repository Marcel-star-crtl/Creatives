import React from 'react';
import './footer.css';
import logoc from "../../assets/logo2.png"

const Footer = () => (
  <div className="gpt3__footer">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div gpt3__footer-links_div--links">
        <h4>Company</h4>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_logo">
        <img src={logoc} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div gpt3__footer-links_div--contact">
        <h4>Get in touch</h4>
        <p>Douala, Cameroon</p>
        <p>+237 679623977</p>
        <p>info@goshen.com</p>
      </div>
    </div>
  </div>
);

export default Footer;
