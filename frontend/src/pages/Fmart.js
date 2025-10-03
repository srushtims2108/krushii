import React from "react";
import { Link } from "react-router-dom";
//added react-router-dom
import { Route } from "react-router-dom";
const Fmart = () => {
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
          maxWidth: "1100px",
          margin: "0 auto",
          background: "white",
          padding: "3rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          position: "relative",
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
          <h2 className="text-xl font-bold my-4">
            🌹 ಕೃಷಿ ಆಶ್ರಮಗಳಲ್ಲಿರಲಿ "ಫ್ಯಾಮಿಲಿ ಫಾರ್ಮರ್ ಸೇವಾ ಕೇಂದ್ರಗಳು" (F-Mart)
          </h2>
          <p>
            <em>(As on 20.07.2025)</em>
          </p>

          {/* Section 1 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">💧🦜💧 ಏನಿದು F-Mart? ವಿವರ ಇಲ್ಲಿದೆ</h3>
            <p>
              ರೈತ ನೈಸರ್ಗಿಕ / ಸಾವಯವ ಕೃಷಿ ಪದ್ಧತಿಯಲ್ಲಿ ಬೆಳೆದದ್ದನ್ನ ವಿಡಿಯೋ ಮಾಡಿ{" "}
              <strong>QR code</strong> ಹಾಕಿ ಪ್ಯಾಕೆಟ್‌ ಮೇಲೆ ಮುದ್ರಿಸಿ & ಬೆಲೆ ನಿಗದಿ
              ರೈತನಿಂದಲೇ — ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ.
            </p>
          </div>

          {/* Section 2 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">🪴 ಹಳೆಯ ಅನುಭವಗಳು</h3>
            <p>
              ಕಳೆದ ಐದಾರು ವರ್ಷಗಳಿಂದ ನಾವು ನಿರಂತರವಾಗಿ{" "}
              <strong>ಫ್ಯಾಮಿಲಿ ಫಾರ್ಮರ್ ಸೇವಾ ಕೇಂದ್ರಗಳ</strong> ಬಗ್ಗೆ
              ಮಾತನಾಡುತ್ತಿದ್ದರೂ, ಹಲವು ಕೇಂದ್ರಗಳು ಯಶಸ್ವಿಯಾಗಲಿಲ್ಲ. ಕಾರಣಗಳು:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>ಮಾಹಿತಿಯನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥೈಸಿಕೊಳ್ಳದೆ ತ್ವರಿತವಾಗಿ ಕೇಂದ್ರಗಳನ್ನು ತೆರೆಯುವುದು</li>
              <li>ಪಾರದರ್ಶಕತೆಯ ಕೊರತೆ</li>
              <li>ಗುಣಮಟ್ಟದ ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಕೊಡದಿರುವುದು</li>
              <li>ಅತಿಯಾದ ವೆಚ್ಚದಲ್ಲಿ ಆರಂಭಿಸುವುದು</li>
              <li>ಎಲ್ಲಾ ಸಾವಯವ ಉತ್ಪನ್ನಗಳು ಲಭ್ಯವಿರದಿರುವುದು</li>
              <li>ಮಾರುಕಟ್ಟೆಗಿಂತ ಬೆಲೆ ಹೆಚ್ಚು ಇರುವುದು</li>
              <li>ಪೂರೈಕೆ ಮಾಡಲು ಸಾಕಷ್ಟು ನೈಸರ್ಗಿಕ ರೈತರ ಕೊರತೆ</li>
              <li>ಕೋವಿಡ್-19 (ಕರೋನ) ಪರಿಣಾಮ</li>
              <li>ಆರ್ಗ್ಯಾನಿಕ್ ಶಾಪ್‌ಗಳ ಮೇಲಿನ ಅವಿಶ್ವಾಸದ ಛಾಯೆ</li>
              <li>ಗ್ರಾಹಕರಿಗೆ ಜ್ಞಾನಾಭಾವ</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">🦜 ಹೊಸ ಚಿಂತನೆ – F-Mart</h3>
            <p>
              ಸೋಲುಗಳಿಂದ ಪಾಠ ಕಲಿತು, ಹಲವಾರು ಚರ್ಚೆಗಳ ಮೂಲಕ <strong>F-Mart</strong>{" "}
              ಪರಿಕಲ್ಪನೆ ಮೂಡಿಬಂದಿದೆ. ಈಗಾಗಲೇ ಕೆಲವು ರೈತರು ಮತ್ತು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ
              ಯಶಸ್ಸು ಕಂಡವರು ಇದರಲ್ಲಿ ಆಸಕ್ತಿ ತೋರಿದ್ದಾರೆ.
            </p>
          </div>

          {/* Section 4 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">🌹 ಏಕೆ F-Mart ಅಗತ್ಯ?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ನಗರಜನರಿಗೆ ಸಮಯದ ಅಭಾವ</li>
              <li>ಒಂದೇ ಸೂರಿನಡಿಯಲ್ಲಿ 200-300 ಪದಾರ್ಥಗಳು ಲಭ್ಯವಾಗಬೇಕಿದೆ</li>
              <li>ಬೆಲೆ ನಿಗದಿಪಡಿಸುವವರು ರೈತರೇ ಆಗಿರಬೇಕು</li>
              <li>ಪ್ಯಾಕೆಟ್ ಮೇಲೆ ರೈತರ ಹೆಸರು, ವಿಳಾಸ, ಮೊಬೈಲ್, QR ಕೋಡ್ ಇರಬೇಕು</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">👉 ಗ್ರಾಹಕರು ಪಾಲ್ಗೊಳ್ಳುವ ವಿಧ</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ಹತ್ತಿರದ F-Mart ನಲ್ಲಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಿ</li>
              <li>ಪರಿವಾರಕ್ಕೆ ಬೇಕಾದ ಪದಾರ್ಥಗಳ ಪಟ್ಟಿಯನ್ನು ಕೊಡಿ</li>
              <li>
                ಬೆಲೆ ಹೆಚ್ಚು ಅನ್ನಿಸಿದರೆ <em>Suggestion Box</em> ನಲ್ಲಿ ತಿಳಿಸಿ
              </li>
              <li>ನಿಗದಿತ ದಿನಗಳಲ್ಲಿ ಖರೀದಿ ಮಾಡಿ</li>
              <li>ರೈತರ ಜಮೀನಿಗೆ ಭೇಟಿ ಕೊಟ್ಟು ಪರಿಶೀಲನೆ ಮಾಡಲು ಅವಕಾಶ</li>
              <li>F-Mart ಹಮ್ಮಿಕೊಳ್ಳುವ ಅರಿವು ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಿ</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">👉 F-Mart ಆರಂಭಿಸಲು ಬಯಸುವವರು</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ಸೇವಾ ಮನೋಭಾವ ಹೊಂದಿರಬೇಕು</li>
              <li>ರೈತರ ವಿವರ ಖುದ್ದಾಗಿ ಪರಿಶೀಲಿಸಿ</li>
              <li>ನೋಂದಾಯಿತರಲ್ಲದ ರೈತರಿಂದ ಖರೀದಿ ಬೇಡ</li>
              <li>ಬೆಲೆ ನಿಗದಿ ರೈತರ ಜೊತೆ ಕುಳಿತು ನಿರ್ಧರಿಸಬೇಕು</li>
              <li>ಮಾರಾಟದ ನಂತರ ತಕ್ಷಣ ಪಾವತಿ</li>
              <li>ರೈತರ ಹೆಸರು-ವಿಳಾಸಗಳನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರದರ್ಶಿಸಬೇಕು</li>
              <li>ಗ್ರಾಹಕರಿಗೆ ಸಮಯಕ್ಕೆ ಮಾಹಿತಿ ನೀಡಲು WhatsApp ಗ್ರೂಪ್</li>
              <li>ಮೊದಲು ಬರುವವರಿಗೆ ಮೊದಲ ಸೇವೆ</li>
              <li>ಆಹಾರ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಬೇಕು</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">👉 ರೈತರ ಪಾಲ್ಗೊಳ್ಳುವ ವಿಧಾನ</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ನೈಸರ್ಗಿಕ ಕೃಷಿ ಪದ್ಧತಿ ವಿಡಿಯೋ & ವಿವರ ಸಲ್ಲಿಸಬೇಕು</li>
              <li>ಗ್ರಾಹಕರು ಜಮೀನಿಗೆ ಭೇಟಿ ನೀಡಲು ಅವಕಾಶ ಮಾಡಿಕೊಡಿ</li>
              <li>ಉತ್ಪನ್ನಗಳ ಬೆಲೆಯನ್ನು F-Mart ಜೊತೆ ಚರ್ಚಿಸಿ ನೀವು ನಿಗದಿಪಡಿಸಬಹುದು</li>
              <li>ಬೆಲೆ ಮಾರುಕಟ್ಟೆಗಿಂತ ಗರಿಷ್ಠ 20% ಮಾತ್ರ ಹೆಚ್ಚು ಇರಬೇಕು</li>
              <li>ಮಾರಾಟದ ನಂತರ 30-40% ಸೇವಾ ಶುಲ್ಕ ನೀಡಬೇಕು</li>
              <li>Perishable ಉತ್ಪನ್ನಗಳನ್ನು ತಾಜಾ ಆಗಿ ತಲುಪಿಸಬೇಕು</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="my-6">
            <h3 className="text-lg font-semibold">✒️ ಸಾರಾಂಶ</h3>
            <p>
              ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯಿಂದ ನಡೆಯುವ ಈ ಅಭಿಯಾನ ರೈತರಿಗೂ ಗ್ರಾಹಕರಿಗೂ ಅನುಕೂಲ.{" "}
              <strong>ರೈತನಿಗೆ</strong> – ತಾನು ಕೊಟ್ಟ ಉತ್ಪನ್ನ ಎಷ್ಟುಕ್ಕೆ ಮಾರಾಟವಾಯಿತು ಎಂಬ
              ಅರಿವು. <strong>ಗ್ರಾಹಕರಿಗೆ</strong> – ಯಾವ ಬೆಲೆಗೆ ರೈತನಿಂದ ಖರೀದಿಸಲ್ಪಟ್ಟಿತ್ತು
              ಎಂಬ ಮಾಹಿತಿ.
            </p>
          </div>

          {/* Section 9 */}
          <div className="my-6">
            <p>
              🌳 ದಯವಿಟ್ಟು ಗಮನಿಸಿ: ನಾವು ಯಾವುದೇ ಕಂಪನಿಗೆ ಸೇರಿದವರಲ್ಲ, ಮಧ್ಯವರ್ತಿಗಳಲ್ಲ. ನಾವು
              ಹಳ್ಳಿ ಮೂಲದವರೇ, ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಉದ್ದೇಶ ಮಾತ್ರ.
            </p>
            <p>
              ಆಸಕ್ತರು ಸಂಪರ್ಕಿಸಿ: <strong>9916030272</strong>
            </p>
          </div>
        </div>

        {/* Signature Block */}
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

export default Fmart;
