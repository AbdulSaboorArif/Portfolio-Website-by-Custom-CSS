import React from "react";

import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Image from "next/image";
import "../style/style.css"
function Aboutme() {
  return (
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


<section className="about">
  <div className="image-container">
    <img src="My Image.jpeg" alt="image" className="profile-image"/>
  </div>
  <div className="content">
    <h1>About Me</h1>
    <p>My name is Abdul Saboor, a skilled Frontend and Backend Developer from Pakistan with expertise in technologies like HTML, CSS, TypeScript, and Next.js. I bring a strong eye for design, utilizing tools like Figma and Canva to create polished, user-friendly interfaces.</p>
    
    <div className="info-cards">
      <div className="info-card">
        <p><strong>Name</strong></p>
        <p>Abdul Saboor</p>
      </div>
      <div className="info-card">
        <p><strong>Date of Birth</strong></p>
        <p>April 21, 2005</p>
      </div>
      <div className="info-card">
        <p><strong>Address</strong></p>
        <p>Karachi, Pakistan</p>
      </div>
      <div className="info-card">
        <p><strong>Zip Code</strong></p>
        <p>7900</p>
      </div>
      <div className="info-card">
        <p><strong>Email</strong></p>
        <p>abdulsaboorarif73@gmail.com</p>
      </div>
      <div className="info-card">
        <p><strong>Phone</strong></p>
        <p>03132301804</p>
      </div>
    </div>

    <button className="read-more">Read More</button>
  </div>
</section>



   

<footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="/Web logo.png" alt="Logo" width="123" height="110"/>
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
  );
}
export default Aboutme;
