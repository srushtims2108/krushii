import React from "react";
import { Link } from "react-router-dom";

const HeaderCard = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>ಕೃಷಿ ಆಶ್ರಮಗಳು</h1>
        <h2>ನೈಸರ್ಗಿಕ, ವಿಷಮುಕ್ತ ಸುಸ್ಥಿರ ಕೃಷಿ ಆಶ್ರಮಗಳು ಮತ್ತು ದೇಶೀ ಬೀಜಗಳನ್ನು ಅನ್ವೇಷಿಸಿ</h2>
        <p>
          ನೈಸರ್ಗಿಕ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ, ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳನ್ನು ಕಲಿಯಿರಿ, 
          ರಾಸಾಯನಿಕ ಮುಕ್ತ ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಿ, ಮತ್ತು ಜನಪದ ಸಂಸ್ಕೃತಿಯನ್ನು ಅನುಭವಿಸಿ.
        </p>
        <div className="cta-buttons">
          <a href="#ashrams" className="cta-btn cta-primary">ಆಶ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ</a>
          <Link to="/home" className="cta-btn cta-secondary">AgriMarket ಗೆ ಹೋಗಿ</Link>
          <Link to="/about" className="cta-btn cta-secondary">ನಮ್ಮ ಬಗ್ಗೆ</Link>
          <Link to="/Fmart" className="cta-btn cta-secondary">Fmart</Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderCard;
