import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

function About() {
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
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.aboutContent}>
          <h2 className={styles.title}>Minha Abordagem</h2>

          <div className={styles.aboutText}>
            <p className={styles.intro}>
              Converto ideias ambiciosas em{" "}
              <span className={styles.highlight}>
                interfaces digitais excepcionais
              </span>{" "}
              que não apenas impressionam visualmente, mas também geram
              resultados concretos.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Design Centrado no Usuário</h3>
                <p>
                  Cada projeto começa com uma compreensão profunda de quem são
                  seus usuários e o que eles buscam, resultando em interfaces
                  que encantam e convertem.
                </p>
              </div>

              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>Performance Otimizada</h3>
                <p>
                  Construo aplicações rápidas e responsivas com React e Next.js,
                  garantindo tempos de carregamento mínimos e experiências
                  fluidas que mantêm os usuários engajados.
                </p>
              </div>

              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <i className="fas fa-code"></i>
                </div>
                <h3>Código de Qualidade</h3>
                <p>
                  Desenvolvo com práticas modernas e clean code, o que significa
                  aplicações escaláveis, fáceis de manter e preparadas para
                  crescer junto com seu negócio.
                </p>
              </div>
            </div>

            <p className={styles.philosophy}>
              Minha filosofia é simples: criar experiências digitais que não
              apenas atendam às expectativas de hoje, mas que se mantenham
              relevantes e eficazes no futuro.
              <span className={styles.subtle}>
                Quando seu projeto é bem executado desde o início, ele continua
                gerando valor consistentemente.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
