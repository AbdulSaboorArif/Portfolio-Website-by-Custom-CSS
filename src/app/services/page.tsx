
import Image from "next/image";
import "../style/style.css"
function Services() {
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
<section className="services-section">
    <h1 className="section-title">Services</h1>
    
    <div className="services-container">
      {/* <!-- Service Box --> */}
      <div className="service-box service-frontend">
        <h3 className="service-title">Frontend Development</h3>
        <p className="service-description">
          I specialize in creating responsive and interactive frontend interfaces ensuring a smooth and engaging user experience.
          Using technologies like HTML, CSS, Tailwind CSS, and TypeScript, I design visually appealing layouts that are optimized
          for performance and accessibility.
        </p>
      </div>

      {/* <!-- Service Box --> */}
      <div className="service-box service-backend">
        <h3 className="service-title">Backend Development</h3>
        <p className="service-description">
          My backend development services are focused on building robust and scalable server-side solutions that power applications
          securely and efficiently. Leveraging modern frameworks and best practices, I develop APIs, manage databases, and ensure seamless
          integration with frontend components.
        </p>
      </div>

      {/* <!-- Service Box --> */}
      <div className="service-box service-fullstack">
        <h3 className="service-title">Full Stack Web Development</h3>
        <p className="service-description">
          As a full stack developer, I provide end-to-end solutions from frontend design to backend functionality. I develop cohesive,
          fully integrated web applications that are both visually appealing and technically sound, with a focus on performance and security.
        </p>
      </div>

      {/* <!-- Service Box --> */}
      <div className="service-box service-figma">
        <h3 className="service-title">Figma Design</h3>
        <p className="service-description">
          My Figma design services bring your ideas to life with modern, user-centered layouts and prototypes. I create wireframes,
          interactive prototypes, and high-fidelity designs that ensure usability, brand consistency, and a visually compelling experience.
        </p>
      </div>
    </div>
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
  );
}
export default Services;
