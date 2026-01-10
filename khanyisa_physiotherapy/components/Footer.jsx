import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Book Appointment', href: '#contact' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'About Us', href: '#about' },
    { name: 'Patient Stories', href: '#stories' }
  ];

  const serviceLinks = [
    { name: 'Neuromuscular Pains', href: '#services' },
    { name: 'Chest Conditions', href: '#services' },
    { name: 'Fracture Rehabilitation', href: '#services' },
    { name: 'Pediatric Physio', href: '#services' },
    { name: "Women's Health", href: '#services' },
    { name: 'Sports Injuries', href: '#services' }
  ];

  const contactInfo = [
    { icon: '📍', text: '123 Health Street, Medical District, Johannesburg, 2000' },
    { icon: '📞', text: '(011) 123-4567 | Emergency: (011) 987-6543' },
    { icon: '💬', text: 'WhatsApp: +27 12 345 6789' },
    { icon: '✉️', text: 'info@khanyisaphysio.co.za' }
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Emergency Only' },
    { day: 'Public Holidays', time: 'By Appointment' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', link: 'https://facebook.com/khanyisaphysio', className: 'facebook' },
    { name: 'Instagram', icon: '📷', link: 'https://instagram.com/khanyisaphysio', className: 'instagram' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/khanyisaphysio', className: 'twitter' },
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/company/khanyisaphysio', className: 'linkedin' },
    { name: 'YouTube', icon: '▶️', link: 'https://youtube.com/khanyisaphysio', className: 'youtube' }
  ];

  const healthFunders = [
    'Discovery Health',
    'Momentum Health',
    'Bonitas',
    'Medihelp',
    'Bestmed',
    'Fedhealth',
    'Profmed',
    'Bankmed',
    'GEMS',
    'Polmed'
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            <div className="footer-logo">
              <div className="footer-logo-main">
                <div className="footer-logo-icon">KP</div>
                <div className="footer-logo-text">
                  <h3>Khanyisa</h3>
                  <p>Physiotherapy</p>
                </div>
              </div>
              <p className="footer-description">
                Providing compassionate, professional physiotherapy care to help you 
                restore movement, reduce pain, and improve your quality of life.
              </p>
              
              <div className="footer-badges">
                <span className="footer-badge">HPCSA Registered</span>
                <span className="footer-badge">SASP Certified</span>
                <span className="footer-badge">COVID Safe</span>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="footer-link"
                    >
                      <span className="link-arrow">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <div className="footer-contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <span>{info.icon}</span>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="emergency-badge">
                <div className="emergency-badge-header">
                  <span>🚨</span>
                  <span>Emergency Contact</span>
                </div>
                <p>
                  Available 24/7 for emergencies
                </p>
                <a 
                  href="tel:+27119876543"
                  className="emergency-link"
                >
                  Call: (011) 987-6543
                </a>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Working Hours</h4>
              <ul className="working-hours">
                {workingHours.map((hours, index) => (
                  <li key={index} className="working-hour-item">
                    <span className="hour-day">{hours.day}</span>
                    <span className="hour-time">{hours.time}</span>
                  </li>
                ))}
              </ul>

              <div className="newsletter-section">
                <h5>Stay Updated</h5>
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    className="newsletter-button"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-container">
          <div className="funder-header">
            <h4>We Work With Major Health Funders</h4>
            <p>Direct billing available for most medical aids</p>
          </div>
          
          <div className="funder-grid">
            {healthFunders.map((funder, index) => (
              <div 
                key={index}
                className="funder-item"
              >
                {funder}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            
            <div className="copyright">
              <p>© {currentYear} Khanyisa Physiotherapy. All rights reserved.</p>
              <p>HPCSA Practice Number: 1289101</p>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.className}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="footer-bottom-right">
              <div className="policy-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/disclaimer">Medical Disclaimer</a>
              </div>
              
              <button
                onClick={handleScrollToTop}
                className="back-to-top"
                aria-label="Back to top"
              >
                <span>↑</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/27123456789?text=Hello%20Khanyisa%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span>💬</span>
        <span className="whatsapp-notification">!</span>
      </a>

      <a
        href="tel:+27119876543"
        className="emergency-float"
        aria-label="Emergency Call"
        title="Emergency Call"
      >
        <span>🚨</span>
      </a>
    </footer>
  );
};

export default Footer;