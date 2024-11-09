import React from "react";
import { FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa';
import { SiVercel } from "react-icons/si";
import Image from "next/image";
import "../app/style/style.css"
function MYPortfolio () {
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

<main className="main">
  <div className="intro ">
    <h1 className="text-5xl font-bold leading-tight text-gray-800">
      Hi! <br/> I am <span className="highlight">Abdul Saboor</span>
    </h1>
    <h3 className="subtitle">A Full Stack Developer</h3>
    <p className="description">
      I offer web services at competitive prices with high-quality, pixel-perfect websites.
      Features include SEO-friendly, high-ranking designs.
    </p>
    <div className="buttons">
      <button className="btn">Hire Me</button>
      <button className="btn">Download CV</button>
    </div>
  </div>
  
  <div className="image-containerhome">
    <Image src="/My Image.jpeg" alt="my image" className="profile-imagehome" width="213" height="400" />
  </div>
</main>

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
  )
}
export default MYPortfolio



