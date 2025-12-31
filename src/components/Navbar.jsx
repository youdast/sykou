import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">SYKOU Corporation</a>

        <div className="navbar-controls mobile-only">
            <button onClick={toggleTheme} className="icon-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             <button onClick={changeLanguage} className="icon-btn lang-btn">
              <Globe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <button onClick={toggleMenu} className="icon-btn menu-btn">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#hero" className="navbar-link" onClick={() => setIsOpen(false)}>{t('navbar.home')}</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={() => setIsOpen(false)}>{t('navbar.services')}</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={() => setIsOpen(false)}>{t('navbar.projects')}</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>{t('navbar.contact')}</a>
          </li>
          <li className="navbar-item desktop-only">
             <button onClick={toggleTheme} className="icon-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
          <li className="navbar-item desktop-only">
            <button onClick={changeLanguage} className="icon-btn lang-btn">
              <Globe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
