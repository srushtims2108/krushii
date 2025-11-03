import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const searchAshrams = () => {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const cards = document.querySelectorAll('.ashram-card');
    
    cards.forEach(card => {
      const text = card.textContent?.toLowerCase() || '';
      card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
  };

  const toggleMap = () => {
    alert('ನಕ್ಷೆ ವೈಶಿಷ್ಟ್ಯ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿದೆ! 🗺️');
  };

  const showProfile = (farmName) => {
    alert(`${farmName} ಫಾರ್ಮ್‌ನ ವಿಸ್ತೃತ ಪ್ರೊಫೈಲ್ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿದೆ! 👨‍🌾`);
  };

  const playTestimonial = (farmerName) => {
    alert(`${farmerName} ಅವರ ಅನುಭವ ವೀಡಿಯೊ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿದೆ! 🎥`);
  };

  const buyProducts = () => {
    // Navigate to products page instead of alert
    window.location.href = '/products';
  };

  const learnMore = () => {
    alert('ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿದೆ! 📚');
  };

  return (
    <div className="landing-page">
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .landing-page {
            font-family: 'Noto Sans Kannada', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%234CAF50" width="1200" height="800"/><circle fill="%23FFC107" cx="200" cy="150" r="80"/><rect fill="%23388E3C" x="0" y="600" width="1200" height="200"/><rect fill="%23689F38" x="100" y="500" width="80" height="100"/><rect fill="%23689F38" x="300" y="480" width="60" height="120"/><rect fill="%23689F38" x="500" y="520" width="70" height="80"/><rect fill="%23689F38" x="700" y="490" width="90" height="110"/><rect fill="%23689F38" x="900" y="510" width="75" height="90"/></svg>');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            position: relative;
        }

        .hero-content {
            max-width: 1000px;
            padding: 2rem;
            animation: fadeInUp 1s ease;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-btn {
            padding: 15px 30px;
            font-size: 1.1rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
        }

        .cta-primary {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
        }

        .cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

       

        /* Search Section */
        .search-section {
            padding: 3rem 2rem;
            background: #f8f9fa;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .search-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .search-bar {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .search-input, .filter-select {
            padding: 12px 20px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .search-input {
            width: 300px;
            max-width: 100%;
        }

        .search-input:focus, .filter-select:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
        }

        .map-toggle {
            background: #2196F3;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .map-toggle:hover {
            background: #1976D2;
            transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
            padding: 4rem 2rem;
            background: white;
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .stat-card {
            text-align: center;
            padding: 2rem;
            border-radius: 20px;
            background: linear-gradient(135deg, #4CAF50, #8BC34A);
            color: white;
            transform: translateY(0);
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
        }

        .stat-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(76, 175, 80, 0.4);
        }

        .stat-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        /* About Us Section */
        .about-section {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #f8f9fa, #ffffff);
        }

        .about-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2E7D32;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            border-radius: 2px;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
            margin-top: 2rem;
        }

        .about-text {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .about-text:hover {
            transform: translateY(-5px);
        }

        .about-intro {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 2rem;
            text-align: justify;
        }

        .about-points {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .about-point {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, #f0f8f0, #e8f5e8);
            border-radius: 15px;
            border-left: 4px solid #4CAF50;
            transition: transform 0.3s ease;
        }

        .about-point:hover {
            transform: translateX(10px);
        }

        .point-icon {
            font-size: 2rem;
            flex-shrink: 0;
        }

        .point-text h4 {
            color: #2E7D32;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .point-text p {
            color: #666;
            line-height: 1.6;
        }

        .about-features {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .about-features:hover {
            transform: translateY(-5px);
        }

        .about-features h3 {
            color: #2E7D32;
            font-size: 1.8rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            transform: scale(1.03);
            box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
        }

        .feature-icon {
            font-size: 2.5rem;
            flex-shrink: 0;
        }

        .feature-text h4 {
            color: #2E7D32;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            font-weight: 600;
        }

        .feature-text p {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* Featured Ashrams */
        .featured-section {
            padding: 4rem 2rem;
            background: #f8f9fa;
        }

        .ashram-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 2rem;
            overflow-x: auto;
            padding-bottom: 1rem;
        }

        .ashram-card {
            min-width: 300px;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .ashram-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .ashram-image {
            height: 200px;
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }

        .ashram-content {
            padding: 1.5rem;
        }

        .ashram-name {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #2E7D32;
        }

        .ashram-location {
            color: #666;
            margin-bottom: 0.5rem;
        }

        .ashram-method {
            background: #E8F5E8;
            color: #2E7D32;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.9rem;
            display: inline-block;
            margin-bottom: 1rem;
        }

        .view-profile-btn {
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .view-profile-btn:hover {
            background: #388E3C;
            transform: translateY(-2px);
        }

        /* Educational Section */
        .education-section {
            padding: 4rem 2rem;
            background: white;
        }

        .education-content {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .comparison-card {
            padding: 2rem;
            border-radius: 20px;
            transition: all 0.3s ease;
        }

        .desi-seeds {
            background: linear-gradient(135deg, #4CAF50, #8BC34A);
            color: white;
        }

        .hybrid-seeds {
            background: linear-gradient(135deg, #FF9800, #FFC107);
            color: white;
        }

        .comparison-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        /* Testimonials */
        .testimonial-section {
            padding: 4rem 2rem;
            background: #f8f9fa;
        }

        .testimonial-carousel {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        .testimonial-text {
            font-size: 1.2rem;
            font-style: italic;
            margin-bottom: 1rem;
            color: #555;
        }

        .testimonial-author {
            font-weight: bold;
            color: #2E7D32;
        }

        .play-video-btn {
            background: #FF5722;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }

        .play-video-btn:hover {
            background: #E64A19;
            transform: translateY(-2px);
        }

        /* CTA Section */
        .final-cta {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #2E7D32, #4CAF50);
            color: white;
            text-align: center;
        }

        .final-cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .final-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .final-cta-btn {
            background: white;
            color: #2E7D32;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .final-cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        /* Footer */
        .footer {
            background: #1B5E20;
            color: white;
            padding: 3rem 2rem 1rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .footer-section h3 {
            margin-bottom: 1rem;
            color: #8BC34A;
        }

        .footer-section a {
            color: #ccc;
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: #8BC34A;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #388E3C;
            margin-top: 2rem;
            opacity: 0.8;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .search-bar {
                flex-direction: column;
                align-items: stretch;
            }
            
            .search-input {
                width: 100%;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .section-title {
                font-size: 2rem;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }

        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        .ashram-grid::-webkit-scrollbar {
            height: 8px;
        }

        .ashram-grid::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }

        .ashram-grid::-webkit-scrollbar-thumb {
            background: #4CAF50;
            border-radius: 10px;
        }

        .ashram-grid::-webkit-scrollbar-thumb:hover {
            background: #388E3C;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>ಕೃಷಿ ಆಶ್ರಮಗಳು</h1>
          <h2>ನೈಸರ್ಗಿಕ, ವಿಷಮುಕ್ತ ಸುಸ್ಥಿರ ಕೃಷಿ ಆಶ್ರಮಗಳು ಮತ್ತು ದೇಶೀ ಬೀಜಗಳನ್ನು ಅನ್ವೇಷಿಸುತ್ತಾ.....</h2>
          <br />
          <p>ನೈಸರ್ಗಿಕ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲು......  </p>
          <p>ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳನ್ನು ಕಲಿಯಲು.....  </p>
          <p>ರಾಸಾಯನಿಕ ಮುಕ್ತ ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಲು...... </p>
          <p>ಜನಪದ ಸಂಸ್ಕೃತಿ ಕಲೆಗಳನ್ನು ಪೋಷಿಸಲು....  </p>
          <p>..... ಇತ್ಯಾದಿ ವಿವಿದೊದ್ದೇಶಗಳನ್ನು ಪೂರೈಸಲು ಬನ್ನಿ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಿ </p>
          <div className="cta-buttons">
            <Link to="/ashram" className="cta-btn cta-primary">ಆಶ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ</Link>
            <Link to="/farmers" className="cta-btn cta-secondary">AgriMarket ಗೆ ಹೋಗಿ</Link>
            <Link to="/about" className="cta-btn cta-secondary">About us</Link>
            <Link to="/Fmart" className="cta-btn cta-secondary">Fmart</Link>
          </div>
        </div>
      </section>

      
      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="section-title">ನಮ್ಮ ಬಗ್ಗೆ</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                ನಮ್ಮ ವೇದಿಕೆಯು ಭಾರತದ ಸಾವಯವ ಮತ್ತು ನೈಸರ್ಗಿಕ ಕೃಷಿ ಆಶ್ರಮಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ತರುವ ಅನನ್ಯ ಮಂಚವಾಗಿದೆ. ನಾವು ರೈತರು, ಗ್ರಾಹಕರು ಮತ್ತು ಪ್ರಕೃತಿ ಪ್ರೇಮಿಗಳ ನಡುವೆ ಸೇತುವೆಯಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತೇವೆ.
              </p>
              <div className="about-points">
                <div className="about-point">
                  <span className="point-icon">🎯</span>
                  <div className="point-text">
                    <h4>ನಮ್ಮ ಗುರಿ</h4>
                    <p>ಸಾವಯವ ಮತ್ತು ನೈಸರ್ಗಿಕ ಕೃಷಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು, ದೇಶೀ ಬೀಜಗಳ ಸಂರಕ್ಷಣೆ ಮತ್ತು ರೈತರ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸುವುದು.</p>
                  </div>
                </div>
                <div className="about-point">
                  <span className="point-icon">🤝</span>
                  <div className="point-text">
                    <h4>ನಮ್ಮ ಮಿಷನ್</h4>
                    <p>ಗ್ರಾಹಕರು ಮತ್ತು ರೈತರ ನಡುವೆ ನೇರ ಸಂಪರ್ಕವನ್ನು ಸ್ಥಾಪಿಸುವುದು, ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ಜ್ಞಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು.</p>
                  </div>
                </div>
                <div className="about-point">
                  <span className="point-icon">🌍</span>
                  <div className="point-text">
                    <h4>ನಮ್ಮ ದೃಷ್ಟಿಕೋನ</h4>
                    <p>ರಾಸಾಯನಿಕ ಮುಕ್ತ, ಸುಸ್ಥಿರ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಕೃಷಿಯ ಮೂಲಕ ಆರೋಗ್ಯಕರ ಭಾರತವನ್ನು ನಿರ್ಮಿಸುವುದು.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-features">
              <h3>ನಮ್ಮ ವಿಶೇಷತೆಗಳು</h3>
              <div className="feature-grid">
                <div className="feature-item">
                  <span className="feature-icon">🔍</span>
                  <div className="feature-text">
                    <h4>ವಿಸ್ತೃತ ಹುಡುಕಾಟ</h4>
                    <p>ಸ್ಥಳ, ಬೆಳೆ, ಕೃಷಿ ವಿಧಾನದ ಆಧಾರದಲ್ಲಿ ಆಶ್ರಮಗಳನ್ನು ಹುಡುಕಿ</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌐</span>
                  <div className="feature-text">
                    <h4>ಇಂಟರ್ಯಾಕ್ಟಿವ್ ನಕ್ಷೆ</h4>
                    <p>ನಿಮ್ಮ ಸುತ್ತಲಿನ ಆಶ್ರಮಗಳನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <div className="feature-text">
                    <h4>ನೇರ ಸಂಪರ್ಕ</h4>
                    <p>ರೈತರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಆರ್ಡರ್ ಮಾಡಿ</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📚</span>
                  <div className="feature-text">
                    <h4>ಶೈಕ್ಷಣಿಕ ವಿಷಯ</h4>
                    <p>ಸಾವಯವ ಕೃಷಿಯ ಬಗ್ಗೆ ಕಲಿಯಿರಿ ಮತ್ತು ಅನುಭವಿಸಿ</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⭐</span>
                  <div className="feature-text">
                    <h4>ರೇಟಿಂಗ್ ಮತ್ತು ರಿವ್ಯೂ</h4>
                    <p>ಇತರ ಗ್ರಾಹಕರ ಅನುಭವಗಳನ್ನು ಓದಿ ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಿ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ashrams Section */}
      <section className="featured-section" id="ashrams">
        <div className="about-container">
          <h2 className="section-title">ವಿಶೇಷ ಆಶ್ರಮಗಳು</h2>
          <div className="ashram-grid">
            <div className="ashram-card">
              <div className="ashram-image">🌾</div>
              <div className="ashram-content">
                <div className="ashram-name">ಸುಮಂತ್ ಕೃಷಿ ಆಶ್ರಮ</div>
                <div className="ashram-location">📍 ಮೈಸೂರು, ಕರ್ನಾಟಕ</div>
                <div className="ashram-method">ಶೂನ್ಯ ಬಜೆಟ್ ನೈಸರ್ಗಿಕ ಕೃಷಿ</div>
                <p>ಧಾನ್ಯಗಳು, ಕಾಳುಗಳು ಮತ್ತು ತರಕಾರಿಗಳ ವೈವಿಧ್ಯಮಯ ಉತ್ಪಾದನೆ. 15+ ವರ್ಷಗಳ ಅನುಭವ.</p>
                <button className="view-profile-btn" onClick={() => showProfile('sumant')}>ಪ್ರೊಫೈಲ್ ನೋಡಿ</button>
              </div>
            </div>
            
            <div className="ashram-card">
              <div className="ashram-image">🥬</div>
              <div className="ashram-content">
                <div className="ashram-name">ಪ್ರಕೃತಿ ಫಾರ್ಮ್</div>
                <div className="ashram-location">📍 ಹಾಸನ, ಕರ್ನಾಟಕ</div>
                <div className="ashram-method">ಸಾವಯವ ಕೃಷಿ</div>
                <p>ವಿಶೇಷವಾಗಿ ಎಲೆಕೋಸು, ಟೊಮ್ಯಾಟೊ ಮತ್ತು ಮೆಣಸಿನಕಾಯಿ. ಸಂಪೂರ್ಣ ರಾಸಾಯನಿಕ ಮುಕ್ತ.</p>
                <button className="view-profile-btn" onClick={() => showProfile('prakriti')}>ಪ್ರೊಫೈಲ್ ನೋಡಿ</button>
              </div>
            </div>
            
            <div className="ashram-card">
              <div className="ashram-image">🍇</div>
              <div className="ashram-content">
                <div className="ashram-name">ನಂದಿನಿ ಆರ್ಗಾನಿಕ್ ಫಾರ್ಮ್</div>
                <div className="ashram-location">📍 ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ</div>
                <div className="ashram-method">ಬಯೋಡೈನಾಮಿಕ್ ಕೃಷಿ</div>
                <p>ಹಣ್ಣಿನ ತೋಟಗಳು ಮತ್ತು ವಿಶೇಷ ದೇಶೀ ಬೀಜಗಳ ಸಂರಕ್ಷಣೆ ಮತ್ತು ವಿತರಣೆ.</p>
                <button className="view-profile-btn" onClick={() => showProfile('nandini')}>ಪ್ರೊಫೈಲ್ ನೋಡಿ</button>
              </div>
            </div>
            
            <div className="ashram-card">
              <div className="ashram-image">🌿</div>
              <div className="ashram-content">
                <div className="ashram-name">ಗೌತಮ್ ನ್ಯಾಚುರಲ್ ಫಾರ್ಮ್</div>
                <div className="ashram-location">📍 ತುಮಕೂರು, ಕರ್ನಾಟಕ</div>
                <div className="ashram-method">ನೈಸರ್ಗಿಕ ಕೃಷಿ</div>
                <p>ಆಯುರ್ವೇದಿಕ ಗಿಡಮೂಲಿಕೆಗಳು ಮತ್ತು ಔಷಧೀಯ ಸಸ್ಯಗಳ ಕೃಷಿ. ವಿಶೇಷ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು.</p>
                <button className="view-profile-btn" onClick={() => showProfile('gautam')}>ಪ್ರೊಫೈಲ್ ನೋಡಿ</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="education-content">
          <h2 className="section-title">ದೇಶೀ ಬೀಜಗಳು ಯಾಕೆ?</h2>
          <div className="comparison-grid">
            <div className="comparison-card desi-seeds">
              <h3>🌾 ದೇಶೀ ಬೀಜಗಳು</h3>
              <ul style={{textAlign: 'left', marginTop: '1rem'}}>
                <li>✅ ಉಚಿತ ಬೀಜ ಸಂರಕ್ಷಣೆ</li>
                <li>✅ ಕಡಿಮೆ ನೀರಿನ ಅಗತ್ಯ</li>
                <li>✅ ನೈಸರ್ಗಿಕ ಕೀಟ ನಿರೋಧಕತೆ</li>
                <li>✅ ಹೆಚ್ಚು ಪೋಷಕಾಂಶಗಳು</li>
                <li>✅ ಪರಿಸರ ಸ್ನೇಹಿ</li>
              </ul>
            </div>
            <div className="comparison-card hybrid-seeds">
              <h3>🧪 ಹೈಬ್ರಿಡ್ ಬೀಜಗಳು</h3>
              <ul style={{textAlign: 'left', marginTop: '1rem'}}>
                <li>❌ ಪ್ರತಿ ವರ್ಷ ಖರೀದಿ</li>
                <li>❌ ಹೆಚ್ಚು ನೀರು ಬೇಕು</li>
                <li>❌ ರಾಸಾಯನಿಕ ಅವಲಂಬನೆ</li>
                <li>❌ ಕಡಿಮೆ ಪೋಷಕಾಂಶಗಳು</li>
                <li>❌ ಪರಿಸರ ಹಾನಿ</li>
              </ul>
            </div>
          </div>
          <Link to="/products" className="cta-btn cta-primary" style={{marginTop: '2rem', display: 'inline-block'}}>ಬೀಜ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ</Link>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🏛️</div>
            <div className="stat-number">180+</div>
            <div className="stat-label">ಪಟ್ಟಿಮಾಡಿದ ಆಶ್ರಮಗಳು</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌱</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">ದೇಶೀ ಬೀಜ ಪ್ರಭೇದಗಳು</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👨‍🌾</div>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">ಸಂಪರ್ಕಿತ ರೈತರು</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌿</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">ಸಾವಯವ ಉತ್ಪನ್ನಗಳು</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="about-container">
          <h2 className="section-title">ರೈತರ ಅನುಭವಗಳು</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "ನಾನು 5 ವರ್ಷಗಳಿಂದ ಸಾವಯವ ಕೃಷಿ ಮಾಡುತ್ತಿದ್ದೇನೆ. ಈ ವೇದಿಕೆಯ ಮೂಲಕ ನನ್ನ ಉತ್ಪನ್ನಗಳಿಗೆ ಉತ್ತಮ ಬೆಲೆ ಮತ್ತು ನೇರ ಮಾರಾಟ ಸಾಧ್ಯವಾಗಿದೆ."
              </div>
              <div className="testimonial-author">- ರಾಜೇಶ್ ಕುಮಾರ್, ಮೈಸೂರು</div>
              <button className="play-video-btn" onClick={() => playTestimonial('rajesh')}>▶️ ವೀಡಿಯೊ ನೋಡಿ</button>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "ದೇಶೀ ಬೀಜಗಳ ಬಳಕೆಯಿಂದ ನನ್ನ ಬೆಳೆಗಳು ಹೆಚ್ಚು ರೋಗ ನಿರೋಧಕವಾಗಿವೆ ಮತ್ತು ಸ್ವಾದು ಅಧಿಕವಾಗಿದೆ. ಗ್ರಾಹಕರು ಹೆಚ್ಚು ಬೆಲೆ ಕೊಡುತ್ತಾರೆ."
              </div>
              <div className="testimonial-author">- ಪ್ರೀತಿ ದೇವಿ, ಹಾಸನ</div>
              <button className="play-video-btn" onClick={() => playTestimonial('preeti')}>▶️ ವೀಡಿಯೊ ನೋಡಿ</button>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "ಶೂನ್ಯ ಬಜೆಟ್ ನೈಸರ್ಗಿಕ ಕೃಷಿ ಕಲಿತ ನಂತರ ನನ್ನ ಖರ್ಚು 80% ಕಡಿಮೆಯಾಗಿದೆ ಮತ್ತು ಲಾಭ ದುಪ್ಪಟ್ಟಾಗಿದೆ."
              </div>
              <div className="testimonial-author">- ಮಹೇಶ್ ಬಾಬು, ತುಮಕೂರು</div>
              <button className="play-video-btn" onClick={() => playTestimonial('mahesh')}>▶️ ವೀಡಿಯೊ ನೋಡಿ</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta" id="contact">
        <h2>ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</h2>
        <p>ಆರೋಗ್ಯಕರ ಆಹಾರ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿಯ ಕಡೆಗೆ ಒಂದು ಹೆಜ್ಜೆ ಇಡಿ</p>
        <div className="final-cta-buttons">
          <button className="final-cta-btn" onClick={buyProducts}>ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಿ</button>
          <button className="final-cta-btn" onClick={learnMore}>ತರಬೇತಿ ಪಡೆಯಿರಿ</button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default LandingPage;