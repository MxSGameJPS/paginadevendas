import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/saulopavanello/",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/mxsgamejps/",
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      url: "https://wa.me/5551996044645",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h2>Saulo Pavanello</h2>
          <p>Desenvolvedor Front-End</p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>Navegação</h3>
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="mailto:mxsgamejps@gmail.com">mxsgamejps@gmail.com</a>
              </li>
              <li>
                <a href="tel:+5551993392983">+55 (51) 99339-2983</a>
              </li>
              <li>Dois Irmãos / RS</li>
            </ul>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <h3>Redes Sociais</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {year} Saulo Pavanello. Todos os direitos reservados.</p>
        <p className={styles.footerCredits}>
          Desenvolvido com <span className={styles.heart}>❤</span> e React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
