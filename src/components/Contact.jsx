'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h3>Email</h3>
                <p>yudasign@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h3>Phone</h3>
                <p>+62 812 1424 848</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h3>Location</h3>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('contact.name')}</label>
              <input 
                type="text" 
                name="name"
                placeholder={t('contact.name')} 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.email')}</label>
              <input 
                type="email" 
                name="email"
                placeholder={t('contact.email')} 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.message')}</label>
              <textarea 
                name="message"
                placeholder={t('contact.message')} 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : t('contact.send')} <Send size={18} />
            </button>
            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
