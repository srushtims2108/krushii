import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ಸಂಪರ್ಕ ಮಾಹಿತಿ</h3>
          <a href="tel:+919876543210">📞 +91 98765 43210</a>
          <a href="mailto:info@naturalfarms.in">✉️ info@naturalfarms.in</a>
          <a href="#">📍 ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ</a>
        </div>
        <div className="footer-section">
          <h3>ಸೇವೆಗಳು</h3>
          <Link to="/products">ಆಶ್ರಮ ಪಟ್ಟಿ</Link>
          <Link to="/products">ದೇಶೀ ಬೀಜಗಳು</Link>
          <Link to="/products">ಸಾವಯವ ಉತ್ಪನ್ನಗಳು</Link>
          <a href="#">ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು</a>
        </div>
        <div className="footer-section">
          <h3>ಮಾಹಿತಿ</h3>
          <a href="#about">ನಮ್ಮ ಬಗ್ಗೆ</a>
          <a href="#">ಗೌಪ್ಯತೆ ನೀತಿ</a>
          <a href="#">ನಿಯಮಗಳು</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-section">
          <h3>ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ</h3>
          <a href="#">📘 Facebook</a>
          <a href="#">📷 Instagram</a>
          <a href="#">🐦 Twitter</a>
          <a href="#">📺 YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ಭಾರತದ ನೈಸರ್ಗಿಕ ಕೃಷಿ ಆಶ್ರಮಗಳು. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.</p>
      </div>
    </footer>
  );
};

export default Footer;
