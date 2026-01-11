import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Neuromuscularskeletal Pains",
      description: "Comprehensive treatment for various musculoskeletal conditions and pain management.",
      details: [
        "Soft tissue injuries",
        "Chronic and acute back pain",
        "All types of arthritis (Osteoarthritis, Rheumatoid, etc.)",
        "Trigger point therapy",
        "Postural correction",
        "Muscle strains and sprains"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Physiotherapist treating back pain",
      color: "service-blue"
    },
    {
      id: 2,
      title: "Chest Conditions",
      description: "Specialized respiratory care for pulmonary conditions and recovery.",
      details: [
        "Pneumonia management and recovery",
        "Lower Respiratory Tract Infections (LRTI)",
        "Tuberculosis (TB) rehabilitation",
        "Cardiopulmonary congestion management",
        "Breathing exercises and techniques",
        "Airway clearance procedures"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      alt: "Respiratory physiotherapy treatment",
      color: "service-green",
      reverse: true
    },
    {
      id: 3,
      title: "Fracture Rehabilitation",
      description: "Comprehensive care for bone fractures and post-fracture recovery.",
      details: [
        "Crutches training and gait education",
        "Functional training for daily activities",
        "Mobility restoration programs",
        "Strength and balance training",
        "Joint mobilization techniques",
        "Return to work/sports programs"
      ],
      image: "https://tse4.mm.bing.net/th/id/OIP.XpfMI7CElrgNNX6tCCRv8QHaLS?rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Fracture rehabilitation with crutches training",
      color: "service-purple"
    },
    {
      id: 4,
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children's developmental and physical needs.",
      details: [
        "Developmental delay interventions",
        "Cerebral palsy management",
        "Musculoskeletal conditions in children",
        "Postural and gait training",
        "Coordination and balance exercises",
        "Play-based therapy approaches"
      ],
      image: "https://png.pngtree.com/png-clipart/20250523/original/pngtree-cute-cartoon-child-physiotherapy-session-png-image_21058826.png",
      alt: "Pediatric physiotherapy session",
      color: "service-orange",
      reverse: true
    },
    {
      id: 5,
      title: "Women's Health",
      description: "Comprehensive care for women's unique physiological needs.",
      details: [
        "Pre and postnatal care",
        "Pelvic floor rehabilitation",
        "Incontinence management",
        "Menopause-related musculoskeletal issues",
        "Osteoporosis prevention and management",
        "Breast cancer rehabilitation"
      ],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
      alt: "Women's health physiotherapy",
      color: "service-pink"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our <span>Specialized Services</span></h2>
          <p>
            Comprehensive physiotherapy care tailored to your unique needs, 
            delivered by certified professionals in a compassionate environment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-item ${service.reverse ? 'reverse' : ''}`}
            >
              <div className="service-grid">
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(service.title)}`;
                    }}
                  />
                  <div className={`service-number ${service.color}`}>
                    {service.id}
                  </div>
                </div>

                <div className="service-content">
                  <div className="service-category">
                    <span className="service-category-icon">⭐</span>
                    Specialized Care
                  </div>
                  
                  <h3>{service.title}</h3>
                  
                  <p>{service.description}</p>
                  
                  <div className="service-details">
                    <h4>What we treat:</h4>
                    <ul>
                      {service.details.map((detail, idx) => (
                        <li key={idx} style={{ '--index': idx }}>
                          <span className="check-icon">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="service-cta">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta-section">
          <h3>Not sure which service you need?</h3>
          <p>
            Book a consultation and our specialists will assess your condition 
            and recommend the most appropriate treatment plan.
          </p>
          <button className="cta-button">
            Book a Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;