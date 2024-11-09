
import React from "react"


import Image from "next/image";
import "../style/style.css"
function Contactme(){
    return(
        <>
         <header className="header">
  <div className="logo">
    <Image src="/Web logo.png" alt="logo" width="109" height="110" />
  </div>

  <nav className="navbar">
    <a href="/" className="nav-link">Home</a>
    <a href="/aboutme" className="nav-link">About Me</a>
    <a href="/skills" className="nav-link">Skills</a>
    <a href="/services"className="nav-link">Services</a>
    <a href="/contactme" className="nav-link">Contact Me</a>
  </nav>
</header>

       
        {/* <!-- Contact Me Section with Tailwind CSS --> */}
        <section className="contact-section">
    <h1 className="contact-title">Contact <span className="highlight">Me</span></h1>
    
    <form action="" className="contact-form">
      <div className="input-group">
        <div className="input-column">
          <input type="text" placeholder="Full Name" className="input-field"/>
          <input type="email" placeholder="Email" className="input-field mt-4"/>
        </div>
        
        <div className="input-column">
          <input type="number" placeholder="Contact Number" className="input-field"/>
          <input type="text" placeholder="Subject" className="input-field mt-4"/>
        </div>
      </div>

      <div className="textarea-group">
        <textarea placeholder="Your Message" className="textarea-field"></textarea>
        
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  </section>


<footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <Image src="/Web logo.png" alt="Logo" width="123" height="110"/>
      </div>
      <div className="contact-info">
        <p><strong>Address:</strong> Karachi, Pakistan</p>
        <p><strong>Phone:</strong> 03132301804</p>
        <p><strong>Email:</strong> abdulsaboorarif73@gmail.com</p>
      </div>
      <div className="footer-links">
        <a href="/" className="footer-link">Home</a>
        <a href="/aboutme" className="footer-link">About Me</a>
        <a href="/skills" className="footer-link">Skills</a>
        <a href="/services" className="footer-link">Services</a>
        <a href="/contactme" className="footer-link">Contact Me</a>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
        <a href="https://youtube.com" className="social-icon">YouTube</a>
        <a href="https://vercel.com" className="social-icon">Vercel</a>
        <a href="https://github.com" className="social-icon">GitHub</a>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2024 Your Name or Brand. All rights reserved.</p>
    </div>
  </footer>
</>
    )
}
export default Contactme