import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';
import AOS from 'aos';
import { Table } from 'react-bootstrap';
import 'aos/dist/aos.css';

// Import Images
import logo from './images/bike.jpg';
import login from './images/login.png';
import Drive from './images/Homeimg.jpg';
import idea from './images/idea.png';
import uparrow from './images/Homearrow.png';
import offer from './images/offer.png';
import g1 from './images/g1.png';
import g2 from './images/g2.png';
import g3 from './images/g3.png';

// Import CSS
import './App.css';


function App() {
  // --- STATE AND HANDLERS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🛑 FIVE SEPARATE REFS FOR THE FIVE LINES 🛑
  const typedelement = useRef(null);
  const typedelement2 = useRef(null);
  const typedelement3 = useRef(null);
  const typedelement4 = useRef(null);
  const typedelement5 = useRef(null);

  // Base style for cards (hover effects are mostly handled by CSS)
  const baseCardStyle = {
    transition: "all 0.3s ease",
    width: "400px",
    textAlign: "center",
    border: "2px solid black",
    margin: "50px auto",
    padding: "20px 30px",
    borderRadius: "15px",
    boxShadow: "10px 10px 20px grey",
  };

  const [servicesStyle, setServicesStyle] = useState(baseCardStyle);
  const [price1Style, setPrice1Style] = useState(baseCardStyle);
  const [price2Style, setPrice2Style] = useState(baseCardStyle);
  const [price3Style, setPrice3Style] = useState(baseCardStyle);


  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Hover handlers for normal cards (services, packages)
  const handleHover = (setter) => {
    setter(prev => ({
      ...prev,
      boxShadow: "5px 5px 20px #0f1265ff",
      transform: "scale(1.08)"
    }));
  };

  const handleLeave = (setter) => {
    setter(baseCardStyle);
  };

  // New State for the 5 Service Boxes' special hover effect
  const [specialBoxHover, setSpecialBoxHover] = useState(null);

  const handleSpecialHover = (index) => {
    setSpecialBoxHover(index);
  };

  const handleSpecialLeave = () => {
    setSpecialBoxHover(null);
  };
  // -----------------------------


  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    // 🛑 TYPED.JS CHAINING LOGIC (Ensures sequential typing, showCursor: false applied) 🛑

    const typingOptions = {
      typeSpeed: 20,
      loop: false,
      showCursor: false,
    };

    let typed1 = new Typed(typedelement.current, {
      strings: ["Offers training for both two-wheelers and four-wheelers."],
      ...typingOptions
    });

    let typed2 = new Typed(typedelement2.current, {
      strings: ["Certified instructors teach vehicle controls, road signs, and real-world driving skills."],
      ...typingOptions
    });

    let typed3 = new Typed(typedelement3.current, {
      strings: ["Provides bike balancing and car-handling practice in traffic conditions."],
      ...typingOptions
    });

    let typed4 = new Typed(typedelement4.current, {
      strings: ["Lessons are structured and tailored to each learner’s pace."],
      ...typingOptions
    });

    let typed5 = new Typed(typedelement5.current, {
      strings: ["Focuses on safety and responsible driving to prepare students for licensing."],
      ...typingOptions
    });

    // Cleanup function for all instances
    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
      typed4.destroy();
      typed5.destroy();
    };
    // The dependency array is intentionally empty to run once on mount, 
    // as the logic is intended for initial sequential text typing.
    // This is often where a linter (yellow signal) would suggest adding 'typedelement' etc.
  }, []);

  const messageHandle = (e) => {
    e.preventDefault();
    let slot = "";

    const username = document.getElementById("username")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    const slotsMap = {
      v1: "9:00am to 10:00am", 
      v2: "10:00am to 11:00am",
      v3: "11:00am to 12:00pm",
      v4: "12:00pm to 1:00pm",
      v5: "1:00pm to 2:00pm", 
      v6: "2:00pm to 3:00pm",
      v7: "3:00pm to 4:00pm",
      v8: "4:00pm to 5:00pm",
      v9: "5:00pm to 6:00pm",
    };

    let slotSelected = false;
    for (const id in slotsMap) {
      if (document.getElementById(id)?.checked) {
        slot += slotsMap[id] + " | ";
        slotSelected = true;
      }
    }

    if (username && email && message) {
      if (slotSelected) {
        const content = `Username: ${username}\nEmail: ${email}\nMessage: ${message}\nSlots: ${slot.trim()}`;
        const url = `https://wa.me/9840436069?text=${encodeURIComponent(content)}`;
        window.open(url, "_blank");
      } else {
        alert("Please select at least one slot");
        window.location.hash = "#slotsbooking";
      }
    } else {
      alert("Please fill all the fields");
    }
  };


  // --- HEADER RENDER FUNCTION ---
  const renderNavLinks = (isMobile = false) => {
    const linkItems = ["About us", "Services", "Scheme", "Slots Booking", "Package", "Locations", "Contact us"];

    return (
      <>
        {linkItems.map(item => (
          <div key={item}>
            <a
              className={isMobile ? "mobile-link" : "desktop-link"}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              onClick={isMobile ? toggleMenu : undefined}
            >
              {item}
            </a>
          </div>
        ))}

        <div className={isMobile ? "mobile-phone-and-login" : "desktop-phone-and-login"}>
          <span className="phone-number">+91 9840436069</span>
          {!isMobile && <img src={login} width={35} height={35} alt="Login" className="login-icon" />}
        </div>
      </>
    );
  };

  // --- JSX RENDER ---
  return (
    <>
      {/* GLOBAL CSS ANIMATION KEYFRAMES (REQUIRED for the moving logo) */}
      <style>
        {`
        @keyframes spin {
          0%   { transform: translate(0px, 0px) }
          25%  { transform: translate(0px, 0px) }
          50%  { transform: translate(345px, 0px) }
          50.1% { transform: translate(345px, 0px) scaleX(-1); }
          75%  { transform: translate(345px, 0px) scaleX(-1); }
          100% { transform: translate(0px, 0px) scaleX(-1); }
        }
        `}
      </style>

      {/* 1. STICKY HEADER (REFACTORED FOR RESPONSIVENESS) */}
      <img src={logo} width={70} height={55} className="moving-logo" alt="Logo animation" />
      <div className="sticky-header-container">
        <div className="header-background">
          <div className="header-content">

            <div className="logo-title-group">
              <i className="site-title">Sharmila Driving Class</i>
            </div>

            <div className="desktop-nav-links">
              {renderNavLinks(false)}
            </div>

            <div
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              role="button"
            >
              <span className="hamburger-icon">
                {isMenuOpen ? '×' : '\u2261'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MOBILE NAVIGATION MENU (CONDITIONAL OVERLAY) */}
      <div
        id="mobile-nav-menu"
        className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        {renderNavLinks(true)}
      </div>

      {/* --- ABOUT US --- */}
      <div id="aboutus" className="about-us-section">
        <h1 className="section-title">About us</h1>

        <div className="about-us-content">
          <div className="about-image-container">
            <img src={Drive} alt="Driving class" className="about-image" />
          </div>
          <div className="about-text-container">
            {/* 🛑 USING UNORDERED LIST <ul> as requested 🛑 */}
            <ul className="about-list">
              <li className="about-list-item"><span ref={typedelement}></span></li>
              <li className="about-list-item"><span ref={typedelement2}></span></li>
              <li className="about-list-item"><span ref={typedelement3}></span></li>
              <li className="about-list-item"><span ref={typedelement4}></span></li>
              <li className="about-list-item"><span ref={typedelement5}></span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- SERVICES --- */}
      <h1 id="services" className="section-title">Our Services</h1>
      <div className="card-container">
        {/* Service 1: Two-Wheeler Training */}
        <div
          style={servicesStyle}
          onMouseEnter={() => handleSpecialHover(1)}
          onMouseLeave={handleSpecialLeave}
          className={specialBoxHover === 1 ? 'service-box-large' : 'service-box-normal'}
        >
          <h4 className="card-title">Two-Wheeler Training (Scooter & Bike Coaching)</h4><br />
          <span>Our two-wheeler training program helps beginners and experienced riders develop complete control and confidence on the road. We cover essential skills such as balance, smooth acceleration, braking techniques, turning, and traffic awareness. Certified instructors ensure safe and personalized training for every learner.</span>
        </div>

        {/* Service 2: Four-Wheeler Driving Classes */}
        <div
          style={servicesStyle}
          onMouseEnter={() => handleSpecialHover(2)}
          onMouseLeave={handleSpecialLeave}
          className={specialBoxHover === 2 ? 'service-box-large' : 'service-box-normal'}
        >
          <h4 className="card-title">Four-Wheeler Driving Classes (Car Driving Lessons)</h4><br />
          <span>Our four-wheeler driving course provides hands-on training in both manual and automatic cars. Learners are trained in steering control, clutch and gear management, reversing, parking techniques, and real-road traffic navigation. Each session is designed to build confidence and ensure safe, responsible driving.</span>
        </div>

        {/* Service 3: License Assistance & RTO Support */}
        <div
          style={servicesStyle}
          onMouseEnter={() => handleSpecialHover(3)}
          onMouseLeave={handleSpecialLeave}
          className={specialBoxHover === 3 ? 'service-box-large' : 'service-box-normal'}
        >
          <h4 className="card-title">License Assistance & RTO Support (Guidance)</h4><br />
          <span>We assist learners throughout the entire licensing process, including application submission, slot booking, documentation, mock tests, and preparing for the official driving test. Our team ensures a smooth, hassle-free experience with the RTO.</span>
        </div>
      </div>

      {/* Second row of services */}
      <div className="card-container">
        {/* Service 4: Doorstep Pickup & Flexible Training Slots */}
        <div
          style={servicesStyle}
          onMouseEnter={() => handleSpecialHover(4)}
          onMouseLeave={handleSpecialLeave}
          className={specialBoxHover === 4 ? 'service-box-large' : 'service-box-normal'}
        >
          <h4 className="card-title">Doorstep Pickup & Flexible Training Slots</h4><br />
          <span>To make learning convenient, we provide doorstep pickup and drop for practical sessions. Learners can choose flexible batch timings—morning, evening, or weekend classes—to suit their schedules. Our goal is to offer a comfortable and personalized training experience.</span>
        </div>

        {/* 💡 IMAGE ELEMENT IN THE CENTER GAP 💡 */}
        <div className="service-idea-image-container">
          <img src={idea} alt="Idea icon" className="scheme-image" />
        </div>

        {/* Service 5: Advanced Driving Techniques & Safety Training */}
        <div
          style={servicesStyle}
          onMouseEnter={() => handleSpecialHover(5)}
          onMouseLeave={handleSpecialLeave}
          className={specialBoxHover === 5 ? 'service-box-large' : 'service-box-normal'}
        >
          <h4 className="card-title">Advanced Driving Techniques & Safety Training</h4><br />
          <span>For those who want to improve their driving skills, we offer advanced courses such as highway driving, night-time driving, emergency braking, skid control awareness, and defensive driving. These sessions are ideal for new drivers, working professionals, and refresher trainees.</span>
        </div>
      </div>

      {/* --- GALLERY --- */}
      <h1 className="section-title" style={{ marginTop: "50px" }}>Gallery</h1>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={g2} alt="Gallery image 2" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={g1} alt="Gallery image 1" className="gallery-img" />
        </div>
        <div className="gallery-item">
          <img src={g3} alt="Gallery image 3" className="gallery-img" />
        </div>
      </div>

      {/* --- SCHEME --- */}
      <div id="scheme" className="scheme-section">
        <h1 className="section-title" style={{ marginTop: "30px" }}>10-Day Training Schedule</h1>

        <Table striped bordered responsive hover className="scheme-table">
          <thead className="thead-light">
            <tr>
              <th>Days</th>
              <th>Trainings</th>
              <th>Lessons Covered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Introduction & Basic Controls</td>
              <td>Vehicle parts, seating & mirrors, basic controls, balancing (bike), start & stop.</td>
              </tr>
            <tr>
              <td>2</td>
              <td>Moving the Vehicle & Low-Speed Control</td>
              <td>Smooth acceleration/braking, clutch/bite point (car), throttle control (bike), straight driving.</td>
              </tr>
            <tr>
              <td>3</td>
              <td>Turning, Steering & Lane Discipline</td>
              <td>Left/right turns, U-turns, steering control, cornering (bike), lane rules & mirrors.</td>
              </tr>
            <tr>
              <td>4</td>
              <td>Gears & Traffic Awareness</td>
              <td>Gear shifting, speed control, road signs, basic traffic behavior.</td>
              </tr>
            <tr>
              <td>5</td>
              <td>Reverse Driving & Parking Basics</td>
              <td>Reverse driving, straight reverse, basic parking (parallel/angle/slot).</td>
              </tr>
            <tr>
              <td>6</td>
              <td>City Driving Practice</td>
              <td>Moderate traffic practice, gap judgment, following distance, overtaking rules.</td>
              </tr>
            <tr>
              <td>7</td>
              <td>Advanced Parking & Maneuvers</td>
              <td>Parallel/reverse parking, S-bend/8-shape (bike), hill start.</td>
              </tr>
            <tr>
              <td>8</td>
              <td>Highway & Open Road Driving</td>
              <td>High-speed control, lane changes, entering/exiting highways, night-drive basics.</td>
              </tr>
            <tr>
              <td>9</td>
              <td>Emergency Handling & Defensive Driving</td>
              <td>Emergency braking, skid awareness, hazard anticipation, wet/night driving tips.</td>
              </tr>
            <tr>
              <td>10</td>
              <td>Mock Test & Final Assessment</td>
              <td>Full driving test simulation, parking test, road rules test, feedback, RTO preparation.</td>
              </tr>
          </tbody>
        </Table>
      </div>


      {/* --- SLOT BOOKING --- */}
      <div id="slotsbooking">
        <h1 className="section-title">Slot Booking</h1>
        <div className="slot-table-container">
          <Table className="slot-table">
            <thead>
              <tr>
                <th scope="col">SNO</th>
                <th scope="col">Time</th>
                <th scope="col">Pick your Slot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th><td>9:00am to 10:00am</td>
                <td><input id="v1" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">2</th><td>10:00am to 11:00am</td>
                <td><input id="v2" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">3</th>
                <td>11:00am to 12:00pm</td>
                <td><input id="v3" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">4</th>
                <td>12:00pm to 1:00pm</td>
                <td><input id="v4" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">5</th>
                <td>1:00pm to 2:00pm</td>
                <td><input id="v5" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">6</th>
                <td>2:00pm to 3:00pm</td>
                <td><input id="v6" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">7</th>
                <td>3:00pm to 4:00pm</td>
                <td><input id="v7" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">8</th>
                <td>4:00pm to 5:00pm</td>
                <td><input id="v8" type="checkbox" name="slot" /></td>
                </tr>
              <tr>
                <th scope="row">9</th>
                <td>5:00pm to 6:00pm</td>
                <td><input id="v9" type="checkbox" name="slot" /></td>
                </tr>
            </tbody>
          </Table>
        </div>
      </div>


      {/* --- PACKAGE --- */}
      <h1 className="section-title" id="package">Our Packages</h1>
      <div className="card-container">
        {/* Package 1: Two Wheeler */}
        <div
          style={price1Style}
          onMouseEnter={() => handleHover(setPrice1Style)}
          onMouseLeave={() => handleLeave(setPrice1Style)}
        >
          <h2 className="card-title">Beginners - MCWG</h2><br />
          <div>
            <h2 className="package-subtitle">Two Wheeler</h2>
            <p><span><i>5 Day Plan :</i>&nbsp;</span>
            <span className="old-price"> ₹700/Hr</span>
            <span>&nbsp;<strong className="new-price">₹599/Hr</strong></span></p>
            <p><span><i>10 Day Plan :</i>&nbsp;</span>
            <span className="old-price"> ₹800/Hr</span>
            <span>&nbsp;<strong className="new-price">₹649/Hr</strong></span></p>
            <h4 className="feature-list">✅ 8-Track</h4>
            <h4 className="feature-list">✅ Turning</h4>
            <h4 className="feature-list">✅ Balance </h4>
            <h4 className="feature-list">✅ Full Training</h4>
          </div>
        </div>

        {/* Package 2: Four Wheeler */}
        <div
          style={price3Style}
          onMouseEnter={() => handleHover(setPrice3Style)}
          onMouseLeave={() => handleLeave(setPrice3Style)}
        >
          <h2 className="card-title">Beginners - LMV</h2><br />
          <div>
            <h2 className="package-subtitle">Four Wheeler</h2>
            <p><span><i>10 Day Plan :</i>&nbsp;</span>
            <span className="old-price">₹650/Hr</span>
            <span>&nbsp;<strong className="new-price">₹499/Hr</strong></span></p>
          </div><br />
          <h4 className="feature-list">✅ Full training - ABC</h4>
          <h4 className="feature-list">✅ Steering Controls</h4>
          <h4 className="feature-list">✅ Mock test</h4>
          <h4 className="feature-list">✅ Gear Balancing</h4>
          <h4 className="feature-list">✅ Round Form</h4>
          <h4 className="feature-list">✅ Straight Track</h4><br />
          <p className="warning-text">⚠️ Learners should have their own car</p>
        </div>

        {/* Package 3: Combo */}
        <div
          style={price2Style}
          onMouseEnter={() => handleHover(setPrice2Style)}
          onMouseLeave={() => handleLeave(setPrice2Style)}
        >
 <h2 className="card-title">
            <span><img src={offer} alt="Offer badge" width={100} height={100} /></span>
            <span style={{ fontSize: "50px" }}>3&nbsp;</span><span>in&nbsp;</span><span style={{ fontSize: "50px" }}>1</span>
          </h2><br />
          <h2 className="package-subtitle">Two Wheeler + Car + License</h2>
          <h4> Known of riding Bicycle </h4>
          <p><span><i>10 Day Plan :</i>&nbsp;</span><span className="old-price"> ₹700/Hr</span>
          <span>&nbsp;<strong className="new-price">₹399/Hr</strong></span></p>
          <h4> Not Known of riding Bicycle </h4>
          <p><span><i>10-15 Day Plan :</i>&nbsp;</span><span className="old-price"> ₹800/Hr</span>
          <span>&nbsp;<strong className="new-price">₹499/Hr</strong></span></p>
          <h2 className="package-subtitle">Four Wheeler</h2>
           <p><span><i>10-15 Day Plan :</i>&nbsp;</span><span className="old-price"> ₹650/Hr</span>
          <span>&nbsp;<strong className="new-price">₹499/Hr</strong></span></p>
          <p className="warning-text">⚠️ Learners should have their own car</p>
        </div>
      </div>

      {/* --- LOCATIONS --- */}
      <h1 className="section-title" id="locations">Our Locations</h1>
      <div className="location-container">
        <div data-aos="fade-right" data-aos-duration="1000">
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Tambaram</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Chrompet</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Pallavaram</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Meenambakkam</button>
        </div>
        <div data-aos="fade-right" data-aos-duration="900">
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Velachery</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Vandalur</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Urapakkam</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Guduvancheri</button>
        </div>
        <div data-aos="fade-right" data-aos-duration="900">
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Madambakkam</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Potheri</button>
          <button className="location-button" onClick={() => window.location.hash = "#contactus"}>📍Kattankulathur</button>
        </div>
      </div>


      {/* --- CONTACT US --- */}
      <div id="contactus" className="contact-form-container">
        <div className="contact-header">
          <h2 className="card-title">Contact us</h2>
        </div>
        <div className="contact-info">
          <p><b><i>Mail: jansisharmila5@gmail.com</i></b></p>
          <p><b><i>Phone: +91 9840436069</i></b></p>
        </div>
        <div>
          <div className="col-md-6 m-auto">
            <form onSubmit={messageHandle}>
              <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" className="form-control" id="username" placeholder="Enter Your Name" />
                <br />
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div><br />
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea type="text" name="message" className="form-control" id="message" placeholder="Content" />
              </div><br />
              <div className="form-actions">
                <button type="submit" className="contact-button-submit">Submit Booking</button>
              </div>
            </form>
            <button onClick={() => window.location.reload()} className="contact-button-refresh">Refresh</button>
          </div>
        </div>
      </div>

      {/* Up Arrow */}
      <a className="up-arrow-link" href="#aboutus">
        <img src={uparrow} alt="Go to top" className="up-arrow-img" />
      </a>
    </>
  );
}

export default App;