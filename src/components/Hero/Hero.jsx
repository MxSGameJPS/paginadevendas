import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);
  const benefitsRef = useRef(null);
  const badgeRef = useRef(null);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  // Array com todos os benefícios
  const benefits = [
    {
      icon: "fas fa-server",
      text: "Hospedagem e Domínio gratuito por 12 meses",
    },
    {
      icon: "fas fa-headset",
      text: "3 meses de suporte grátis",
    },
    {
      icon: "fas fa-percentage",
      text: "Desconto exclusivo para novos clientes",
    },
    {
      icon: "fas fa-bolt",
      text: "Seu site entregue em 72 horas",
    },
    {
      icon: "fas fa-laptop-code",
      text: "Do design ao site 100% responsivo",
    },
  ];

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
    if (badgeRef.current) {
      setTimeout(() => {
        badgeRef.current.classList.add(styles.animateBadge);
      }, 500);
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

    // Rotação automática dos benefícios
    const benefitInterval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => {
      // Limpar partículas ao desmontar o componente
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
      clearInterval(benefitInterval);
    };
  }, []);

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const handleNextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  return (
    <section className={styles.hero}>
      <div ref={particlesRef} className={styles.particles}></div>

      <div ref={badgeRef} className={styles.expertBadge}>
        <div className={styles.badgeInner}>
          <div className={styles.badgeIcon}>
            <i className="fas fa-award"></i>
          </div>
          <div className={styles.badgeContent}>
            <span className={styles.badgeLabel}>Seu site entregue em 72 horas</span>
            {/* <span className={styles.badgeText}>+50 Projetos Entregues</span> */}
          </div>
        </div>
      </div>

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
          <button
            className={styles.benefitNavButton}
            onClick={handlePrevBenefit}
            aria-label="Benefício anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className={styles.benefitSlider}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitItem} ${
                  index === currentBenefit ? styles.activeBenefit : ""
                }`}
              >
                <div className={styles.benefitIcon}>
                  <i className={benefit.icon}></i>
                </div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          <button
            className={styles.benefitNavButton}
            onClick={handleNextBenefit}
            aria-label="Próximo benefício"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className={styles.benefitIndicators}>
          {benefits.map((_, index) => (
            <button
              key={index}
              className={`${styles.benefitIndicator} ${
                index === currentBenefit ? styles.activeBenefitIndicator : ""
              }`}
              onClick={() => setCurrentBenefit(index)}
              aria-label={`Ir para benefício ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
