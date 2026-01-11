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
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Khanyisa Physiotherapy</span>
            </h1>
            
            <p className="hero-subtitle">
              Expert care for pain relief, rehabilitation, and optimal physical health. 
              Helping you say yes to improving your life.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Patients Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>

            <div className="hero-cta">
              <button 
                className="btn btn-primary"
                onClick={handleBookClick}
              >
                Book Appointment
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleLearnMore}
              >
                View Our Services
              </button>
            </div>
          </div>

          <div className="services-section">
            <h2 className="services-heading">Our Specialized Services</h2>
            
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
                        <div className="service-content">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="carousel-controls">
                <button 
                  className="carousel-btn prev"
                  onClick={() => setCurrentIndex((prev) => prev === 0 ? services.length - 1 : prev - 1)}
                  aria-label="Previous service"
                >
                  ←
                </button>
                
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
                
                <button 
                  className="carousel-btn next"
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;