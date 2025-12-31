import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Palette } from 'lucide-react';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code size={40} />,
      title: t('services.web_dev'),
      desc: t('services.web_dev_desc'),
    },
    {
      icon: <Smartphone size={40} />,
      title: t('services.mobile_dev'),
      desc: t('services.mobile_dev_desc'),
    },
    {
      icon: <Palette size={40} />,
      title: t('services.ui_ux'),
      desc: t('services.ui_ux_desc'),
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
