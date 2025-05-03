import React, { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className={styles.backgroundPattern}></div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.contactContent}>
          <h2 className={styles.title}>Vamos Criar Algo Extraordinário</h2>
          <p className={styles.subtitle}>
            Estou sempre interessado em novos projetos desafiadores e
            oportunidades de colaboração. Entre em contato para conversarmos
            sobre suas ideias.
          </p>

          <div className={styles.contactGrid}>
            <div
              className={`${styles.contactCard} ${
                isVisible ? styles.animate : ""
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a
                href="mailto:mxsgamejps@gmail.com"
                className={styles.contactLink}
              >
                mxsgamejps@gmail.com
              </a>
            </div>

            <div
              className={`${styles.contactCard} ${
                isVisible ? styles.animate : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className={styles.contactIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Telefone</h3>
              <a href="tel:+5551993392983" className={styles.contactLink}>
                +55 (51) 99339-2983
              </a>
            </div>

            <div
              className={`${styles.contactCard} ${
                isVisible ? styles.animate : ""
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className={styles.contactIcon}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/5551996044645"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                +55 (51) 99604-4645
              </a>
            </div>

            <div
              className={`${styles.contactCard} ${
                isVisible ? styles.animate : ""
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <div className={styles.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Localização</h3>
              <p className={styles.contactText}>Dois Irmãos / RS</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div
            className={`${styles.socialSection} ${
              isVisible ? styles.fadeIn : ""
            }`}
            style={{ animationDelay: "0.9s" }}
          >
            <div className={styles.topDivider}></div>
            <h3 className={styles.socialTitle}>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/saulopavanello/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <div className={styles.socialIcon}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/mxsgamejps/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <div className={styles.socialIcon}>
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/5551996044645"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <div className={styles.socialIcon}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
