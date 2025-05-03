import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    // Animação de entrada dos elementos
    if (titleRef.current) {
      titleRef.current.classList.add(styles.animateTitle);
    }
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current.classList.add(styles.animateSubtitle);
      }, 400);
    }
    if (taglineRef.current) {
      setTimeout(() => {
        taglineRef.current.classList.add(styles.animateTagline);
      }, 800);
    }
    if (buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.classList.add(styles.animateButton);
      }, 1200);
    }
    if (benefitsRef.current) {
      setTimeout(() => {
        benefitsRef.current.classList.add(styles.animateBenefits);
      }, 1600);
    }

    // Criar e animar partículas
    const createParticles = () => {
      if (!particlesRef.current) return;

      for (let i = 0; i < 80; i++) {
        const particle = document.createElement("div");
        particle.classList.add(styles.particle);

        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 8 + 2;
        const animDuration = Math.random() * 10 + 5;

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${animDuration}s`;

        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      // Limpar partículas ao desmontar o componente
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
    };
  }, []);

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div ref={particlesRef} className={styles.particles}></div>
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          Saulo Pavanello
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Transformando ideias em experiências digitais memoráveis
        </p>
        <p ref={taglineRef} className={styles.tagline}>
          Desenvolvedor Front-End especializado em React e Next.js que combina
          design elegante com desempenho excepcional
        </p>
        <div className={styles.buttonContainer}>
          <button
            ref={buttonRef}
            className={styles.ctaButton}
            onClick={scrollToPortfolio}
          >
            Conheça Meus Projetos
          </button>
        </div>
      </div>

      <div ref={benefitsRef} className={styles.benefitsStrip}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitItem}>
            <i className="fas fa-server"></i>
            <span>Hospedagem e Domínio gratuito por 12 meses</span>
          </div>
          <div className={styles.benefitItem}>
            <i className="fas fa-headset"></i>
            <span>3 meses de suporte grátis</span>
          </div>
          <div className={styles.benefitItem}>
            <i className="fas fa-percentage"></i>
            <span>Desconto exclusivo para novos clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
