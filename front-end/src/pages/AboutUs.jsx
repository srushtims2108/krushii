import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div
      style={{
        fontFamily: "'Noto Serif Kannada', serif",
        backgroundColor: "#4B6F44",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      {/* Letter Container */}
      <div
        style={{
    width: "90%",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "white",
    padding: "3rem 2.5rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
  }}
      >
        {/* Decorative Watermark */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "6rem",
            opacity: 0.05,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          🌿
        </div>

        {/* Letter Header */}
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src="https://img.icons8.com/emoji/96/seedling.png"
            alt="Logo"
            style={{ width: "70px", marginBottom: "0.5rem" }}
          />
          <h1 style={{ fontSize: "2.5rem", color: "#2E7D32", margin: "0" }}>
            ಕೃಷಿ ಆಶ್ರಮ
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>
            (A journey into sustainable living)
          </p>
        </header>

        {/* Letter Body */}
        <div style={{ fontSize: "1.05rem", lineHeight: "1.9", color: "#333" }}>
          <p>ಪ್ರಿಯ ಗೆಳೆಯರೇ,</p>

          <p>
            ನಮ್ಮ <strong>ಕೃಷಿ ಆಶ್ರಮ</strong>ದ ಪ್ರಯಾಣವು ಪ್ರಕೃತಿಯೊಂದಿಗೆ
            ಮಿಲನಗೊಂಡ ಜೀವನವನ್ನು ಅನುಭವಿಸಲು ಒಂದು ಹಾದಿಯಾಗಿದೆ. ಇದು ಕೇವಲ ಕೃಷಿಯ
            ಕೇಂದ್ರವಲ್ಲ, ಇದು ಜೀವನದ ಮೌಲ್ಯಗಳನ್ನು ಮರುಪಡೆಯುವ ತಾಣವಾಗಿದೆ.
          </p>

          <div style={{ margin: "2rem 0" }}>
            <h3>💧🌹 ಇದೋಂದು ಊಹಿತ "ಕೃಷಿ ಆಶ್ರಮ"ದಲ್ಲೊಂದು ಸುತ್ತು</h3>
            <p>(Revised on 15-08-2025)</p>
            <p>****</p>

            <p>
              ಗೆಳೆಯರೇ,<br />
              ನಿಮಗೆ ಈಗಾಗಲೇ <em>ಕೃಷಿ ಆಶ್ರಮದ</em> ಪರಿಕಲ್ಪನೆ ಅದರ ಉದ್ದೇಶ
              ಮತ್ತು ಇದರ ಹತ್ತಾರು ಕಾರ್ಯ ಚಟುವಟಿಕೆಗಳ ಬಗ್ಗೆ ಅರಿವಿದೆ ಎಂದು
              ತಿಳಿಯುತ್ತೇನೆ.
            </p>

            <p>
              ನನಗೆ ಸಾಕಷ್ಟು ಜನ ಕೃಷಿ ಆಶ್ರಮದ ಬಗ್ಗೆ ವಿವರಗಳನ್ನು ಕೇಳುತ್ತಾರೆ,
              ಹಾಗಾಗಿ ಒಂದು ಕೃಷಿ ಆಶ್ರಮ ಹೇಗಿರುತ್ತದೆ? ಎಂಬುದರ ಬಗ್ಗೆ ಅರಿವನ್ನು
              ಮೂಡಿಸಲು ಈ ಒಂದು ಬರಹ.
            </p>

            <p>
              ಇದೊಂದು ಊಹಿತ ಬರಹ. ನಿಮಗೆ "ಕೃಷಿ ಆಶ್ರಮದೊಳಗಡೆ ಏನೆಲ್ಲಾ ಇದ್ದಾತು"
              ಎಂಬುದರ ವಿವರ ಸಿಗಬಹುದು.
            </p>
          </div>

          {/* Example section */}
          <div style={{ margin: "1.5rem 0" }}>
            <p>
              🌳 ನಾವು ಅಲ್ಲಿಗೆ ಹೋದಾಗ .... ಸಂಜೆ 4.00 ಗಂಟೆ ...!!! ಯಾವುದೇ
              ಕಷ್ಟವಿಲ್ಲದೆ ಸುಲಭವಾಗಿ ಸೇರಬಹುದಾದ ತಾಣ !!
            </p>
            <p>
              🌳 ಅದು ಸರಿ ಸುಮಾರು ನಾಲ್ಕೈದು ಎಕರೆ ಪ್ರದೇಶದ ಜಾಗ! ಸಂಪೂರ್ಣ ಹಚ್ಚ
              ಹಸಿರಿನಿಂದ ಕಂಗೊಳಿಸುತ್ತದೆ... ಹಸಿರೆಂದರೆ ಕೇವಲ ಟ್ರಾಫಿಕ್ ಸಿಗ್ನಲ್ ನ
              ಹಸಿರು ಎಂದು ತಿಳಿದಿದ್ದ ... ನಮಗೆ ಆಗ ದಟ್ಟ ಹಸಿರು ಮನಸ್ಸಿಗೆ ಮುದ ನೀಡಿತು!!
            </p>
          </div>

          {/* Add more sections similarly... */}
        </div>

        {/* Signature */}
        <footer
          style={{
            marginTop: "3rem",
            borderTop: "2px solid #eee",
            paddingTop: "1.5rem",
            textAlign: "right",
          }}
        >
          <p style={{ margin: 0, fontStyle: "italic", color: "#444" }}>
            - ✍ ಡಾ. ಬಿ.ಯಂ ನಾಗಭೂಷಣ ಭೀಮಸಮುದ್ರ
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
            Vice President, LSIKC <br />
            ಕೃಷಿ ಆಶ್ರಮ ಅಭಿಯಾನ
          </p>
        </footer>

        {/* Call to Action */}
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            padding: "1.5rem",
            background: "#f1f8e9",
            borderRadius: "8px",
          }}
        >
          <p style={{ marginBottom: "1rem", fontWeight: "600", color: "#33691E" }}>
            🌿 ಈ ಅನುಭವವನ್ನು ನೀವು ಸಹ ಪಡೆಯಿರಿ 🌿
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link
              to="/products"
              style={{
                background: "linear-gradient(45deg, #4CAF50, #8BC34A)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ
            </Link>
            <Link
              to="/"
              style={{
                background: "transparent",
                border: "2px solid #2E7D32",
                color: "#2E7D32",
                padding: "10px 20px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              ಮುಖಪುಟಕ್ಕೆ ಹಿಂದಿರುಗಿ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
