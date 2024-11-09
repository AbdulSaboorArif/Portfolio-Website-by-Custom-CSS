import React from "react";


import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Image from "next/image";
import "../style/style.css"

function skills() {
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

{/*  Skills Section */}
<section className="skills-section">
    <h1 className="skills-title">Skills</h1>
    <p className="skills-description">
      This is my skill set. I have strong abilities in these skills. If you want to know more, feel free to contact me.
    </p>

    <div className="skills-grid">
      <div className="skill-card">
        <img src="/HTml.jpeg" alt="HTML" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">HTML</p>
        </div>
      </div>

      <div className="skill-card">
        <img src="/css.jpeg" alt="CSS" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">CSS</p>
        </div>
      </div>

      <div className="skill-card">
        <img src="/js.jpeg" alt="JavaScript" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">JavaScript</p>
        </div>
      </div>

      <div className="skill-card">
        <img src="/next.jpeg" alt="Next.js" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">Next.js</p>
        </div>
      </div>

      <div className="skill-card">
        <img src="/figma.jpeg" alt="Figma" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">Figma</p>
        </div>
      </div>

      <div className="skill-card">
        <img src="/image.png" alt="Additional Skill" className="skill-image" />
        <div className="skill-overlay">
          <p className="skill-name">Tailwind CSS</p>
        </div>
      </div>
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
export default skills;

     
 
