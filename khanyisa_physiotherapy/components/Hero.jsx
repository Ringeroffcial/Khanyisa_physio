import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      title: "Pain Relief Therapy",
      description: "Effective treatments for chronic and acute pain conditions",
      icon: "💆‍♂️"
    },
    {
      title: "Rehabilitation",
      description: "Post-operative and injury recovery programs",
      icon: "🚶‍♂️"
    },
    {
      title: "Sports Therapy",
      description: "Performance enhancement and injury prevention",
      icon: "⚽"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleBookClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-welcome">
            <div className="welcome-badge">
              <span className="wave-icon">👋</span>
              <span className="welcome-text">Welcome to Khanyisa Physiotherapy</span>
            </div>
          </div>

          <div className="hero-heading">
            <h1 className="hero-title">
              Hi there, Say <span className="highlight">Yes to Renewing Life</span>
            </h1>
            <p className="hero-subtitle">
              Expert physiotherapy care for pain relief, rehabilitation, 
              and optimal physical health in a compassionate environment.
            </p>
          </div>

          <div className="services-carousel">
            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="carousel-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={handleBookClick}
            >
              <span className="btn-icon">📅</span>
              Book Appointment
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleLearnMore}
            >
              <span className="btn-icon">📖</span>
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Patients Helped</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src="/physiotherapy-hero.jpg" 
              alt="Physiotherapist helping patient with rehabilitation"
              className="main-image"
              loading="eager"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 24 24' fill='%23e0f2fe'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E";
              }}
            />
            <div className="image-overlay"></div>
            
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="certification-badge">
              <span className="badge-icon">🏥</span>
              <span className="badge-text">Certified Practitioners</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;