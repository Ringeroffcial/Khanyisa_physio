import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (linkId, e) => {
    e.preventDefault();
    setActiveLink(linkId);
    setIsMenuOpen(false);
    
    // Scroll to the section
    const element = document.getElementById(linkId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleBookClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header' role="banner">
      <div className='header-container'>
        <div className="logo-section">
          <h1>
            <a 
              href="#home" 
              className="logo-link"
              onClick={(e) => handleNavClick('home', e)}
            >
              <span className="logo-text">Khanyisa Physiotherapy</span>
              <img 
                src="/logo.png" 
                alt="Khanyisa Physiotherapy Logo" 
                width="40" 
                height="40"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='%233b82f6'%3E%3Cpath d='M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z'/%3E%3C/svg%3E";
                }}
              />
            </a>
          </h1>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav 
          role="navigation" 
          aria-label="Main Navigation"
          className={isMenuOpen ? 'open' : ''}
        >
          <ul>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                aria-current={activeLink === 'home' ? 'page' : undefined}
                onClick={(e) => handleNavClick('home', e)}
              >
                <span className="nav-icon">🏠</span>
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('services', e)}
              >
                <span className="nav-icon">🩺</span>
                Services
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('contact', e)}
              >
                <span className="nav-icon">📞</span>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;