import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>SP</span>
          <span className={styles.logoText}>Saulo Pavanello</span>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ""}`}
        >
          <ul>
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.navIcon}>
                  <i className="fas fa-user"></i>
                </span>
                Sobre
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.navIcon}>
                  <i className="fas fa-briefcase"></i>
                </span>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.navIcon}>
                  <i className="fas fa-envelope"></i>
                </span>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
