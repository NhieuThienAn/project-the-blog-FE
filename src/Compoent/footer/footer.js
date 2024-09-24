import React, { useContext } from 'react';
import './footer.scss';
import { DarkModeContext } from '../DarkValue/DarkModeContext';

function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  const footerItems = ['Twitter', 'LinkedIn', 'Email', 'RSS feed', 'Add to Feedly', '© 2023'];

  return (
    <div className={`footer ${darkMode ? 'dark-mode' : ''}`}>
      {footerItems.map((item, index) => (
        <p key={index} className={`footer__para ${darkMode ? 'dark-mode' : ''}`}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Footer;