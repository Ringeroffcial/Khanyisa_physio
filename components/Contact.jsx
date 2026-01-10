import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  // Contact Information
  const contactDetails = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Us',
      icon: '💬',
      color: 'whatsapp',
      details: [
        {
          label: 'Primary WhatsApp',
          value: '+27 78 957 9310',
          link: 'https://wa.me/27123456789?text=Hello%20Khanyisa%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment',
          action: 'Chat Now'
        },
        {
          label: 'Emergency WhatsApp',
          value: '+27 78 957 9310',
          link: 'https://wa.me/27876543210?text=EMERGENCY%3A%20I%20need%20urgent%20physiotherapy%20assistance',
          action: 'Emergency Chat'
        }
      ]
    },
    {
      id: 'phone',
      title: 'Call Us',
      icon: '📞',
      color: 'phone',
      details: [
        {
          label: 'Landline',
          value: '(011) 123 4567',
          link: 'tel:+27111234567',
          action: 'Call Now'
        },
        {
          label: 'Mobile',
          value: '071 234 5678',
          link: 'tel:+27712345678',
          action: 'Call Now'
        },
        {
          label: 'Emergency Line',
          value: '(011) 987 6543',
          link: 'tel:+27119876543',
          action: 'Emergency Call'
        }
      ]
    },
    {
      id: 'email',
      title: 'Email Us',
      icon: '✉️',
      color: 'email',
      details: [
        {
          label: 'General Inquiries',
          value: 'khanyisaphysio@gmail.com',
          link: 'mailto:khanyisaphysio@gmail.com',
          action: 'Send Email'
        },
      ]
    },
    {
      id: 'address',
      title: 'Visit Us',
      icon: '📍',
      color: 'address',
      details: [
        {
          label: 'Kagiso Medical Center',
          value: '3384 Kagiso Avenue, Hillsview, 1754',
          link: 'https://maps.google.com/?q=123+Health+Street,+Medical+District,+Johannesburg',
          action: 'Get Directions'
        },
        {
          label: 'Krugersdorp Medical Center',
          value: '16 Ockerse Street, Krugersdorp,1739',
          link: 'https://maps.google.com/?q=Johannesburg',
          action: 'View Map'
        },

      ]
    }
  ];

  const services = [
    'General Consultation',
    'Neuromuscularskeletal Pains',
    'Chest Conditions',
    'Fracture Rehabilitation',
    'Pediatric Physio',
    'Women\'s Health',
    'Other'
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">📞</span>
            <span className="badge-text">We're Here to Help</span>
          </div>
          <h2>Contact <span>Khanyisa Physiotherapy</span></h2>
          <p>
            Get in touch with our team for appointments, inquiries, or emergency assistance. 
            We're committed to providing you with the best care.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Our Contact Details</h3>
            
            <div className="contact-cards">
              {contactDetails.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`contact-card ${contact.color}`}
                >
                  <div className="contact-card-header">
                    <div className="contact-card-icon">{contact.icon}</div>
                    <h4>{contact.title}</h4>
                  </div>
                  
                  <div className="contact-details">
                    {contact.details.map((detail, index) => (
                      <div key={index} className="contact-detail-item">
                        <p className="contact-detail-label">{detail.label}</p>
                        <p className="contact-detail-value">{detail.value}</p>
                        {detail.link && detail.action && (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-button"
                          >
                            <span className="action-icon">
                              {contact.id === 'whatsapp' ? '💬' : 
                               contact.id === 'phone' ? '📞' : 
                               contact.id === 'email' ? '✉️' : '📍'}
                            </span>
                            {detail.action}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="emergency-banner">
              <div className="emergency-header">
                <span className="emergency-icon">🚨</span>
                <h4>Emergency Assistance</h4>
              </div>
              <p>
                For urgent medical attention after hours, please use our emergency lines.
              </p>
              <div className="emergency-buttons">
                <a 
                  href="tel:+27119876543"
                  className="emergency-button"
                >
                  📞 Call Emergency: (011) 987 6543
                </a>
                <a 
                  href="https://wa.me/27876543210?text=EMERGENCY%3A%20I%20need%20urgent%20physiotherapy%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="emergency-button whatsapp"
                >
                  💬 WhatsApp Emergency
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <p>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitMessage && (
              <div className="success-message">
                ✅ {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="071 234 5678"
                  />
                </div>

                <div className="form-group">
                  <label>Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please describe your condition or inquiry..."
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  required
                />
                <label htmlFor="consent">
                  I consent to Khanyisa Physiotherapy contacting me regarding my inquiry.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span className="submit-icon">📤</span>
                    Send Message
                  </>
                )}
              </button>

              <p className="response-time">
                We typically respond within 1-2 business hours.
              </p>
            </form>

            <div className="alternative-contact">
              <h4>Prefer to contact us directly?</h4>
              <div className="alternative-buttons">
                <a
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alternative-button"
                >
                  <span className="button-icon">💬</span>
                  WhatsApp Chat
                </a>
                <a
                  href="tel:+27111234567"
                  className="alternative-button"
                >
                  <span className="button-icon">📞</span>
                  Call Now
                </a>
                <a
                  href="mailto:info@khanyisaphysio.co.za"
                  className="alternative-button"
                >
                  <span className="button-icon">✉️</span>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Our Clinic</h3>
          <div className="map-content">
            <div className="map-placeholder">
              <div className="map-info-text">
                <div className="map-icon">📍</div>
                <p className="map-title">Khanyisa Physiotherapy Clinic</p>
                <p className="map-address">123 Health Street, Medical District</p>
                <p className="map-address">Johannesburg, 2000</p>
              </div>
            </div>
            
            <div className="map-info">
              <h4>📍 How to Reach Us</h4>
              <div className="map-details">
                <div className="map-detail-item">
                  <span>🚗</span>
                  <span>Ample parking available on premises</span>
                </div>
                <div className="map-detail-item">
                  <span>🚌</span>
                  <span>Bus stop: Health Street Station (100m)</span>
                </div>
                <div className="map-detail-item">
                  <span>🚇</span>
                  <span>Nearest train: Medical District Station</span>
                </div>
                <div className="map-detail-item">
                  <span>♿</span>
                  <span>Wheelchair accessible entrance</span>
                </div>
              </div>
              
              <a
                href="https://maps.google.com/?q=123+Health+Street,+Medical+District,+Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-button"
              >
                🗺️ Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;