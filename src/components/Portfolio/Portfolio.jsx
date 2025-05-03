import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "MaisDireito Advogados",
      link: "https://sistema-advogados.vercel.app",
      description:
        "Site institucional para escritório de advocacia com layout moderno e responsivo. Com área de usuário para agendamento de consultas e contato com o escritório e um painel de controle para o escritório.",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      results: [
        "Agendamento de reuniões com o escritório vinculado ao calendário do Google",
        "Painel de controle para o escritório com gerenciamento de sócios, agendamentos e lembretes",
        "Carregamento 2x mais rápido",
      ],
      image: "/advogados.png",
    },
    {
      id: 2,
      title: "Barbearia Pavanello",
      link: "https://barbearia-three-teal.vercel.app",
      description:
        "Site completo para barbearia com agendamento de serviços, venda de produtos e área administrativa.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      results: [
        "Agendamento de serviços com integração ao calendário do Google",
        "Painel de controle para a barbearia com gerenciamento de clientes, agendamentos e produtos",
        "Venda de produtos com sistema de checkout seguro",
        "Aumento de 30% no número de clientes",
      ],
      image: "/barbearia.png",
    },
    {
      id: 3,
      title: "Confraria Chopp & Grill",
      link: "https://confraria-chop-grill.vercel.app",
      description:
        "Redesign moderno para um restaurante tradicional, com menu interativo e informações de contato.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      results: [
        "Aumento de 55% no número de pedidos online",
        "96% de avaliações positivas",
        "Redução de 30% no tempo de entrega",
      ],
      image: "/restaurante.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("portfolio");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolioContent}>
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ""}`}>
          Projetos com Resultados
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.visible : ""}`}>
          Cada projeto é uma oportunidade para criar valor mensurável para meus
          clientes
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectButton}
                  >
                    Ver Detalhes
                  </a>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.resultsContainer}>
                  <h4 className={styles.resultsTitle}>Resultados</h4>
                  <ul className={styles.resultsList}>
                    {project.results.map((result, i) => (
                      <li key={i} className={styles.resultItem}>
                        <span className={styles.resultIcon}>✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${styles.callToAction} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <p>
            Quer ver como podemos criar resultados semelhantes para o seu
            negócio?
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Vamos Conversar
          </a>
        </div>
      </div>

      <div className={styles.testimonialsSection}>
        <h3
          className={`${styles.testimonialsTitle} ${
            isVisible ? styles.visible : ""
          }`}
        >
          O Que Meus Clientes Dizem
        </h3>

        <div className={styles.testimonials}>
          <div
            className={`${styles.testimonial} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-left"></i>
              </div>
              <p>
                Saulo não apenas entregou um site excepcional, mas realmente se
                preocupou em entender nossos objetivos de negócio. O resultado
                foi um aumento significativo em leads qualificados e conversões.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Cliente"
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4>Ricardo Almeida</h4>
                  <p>CEO, TechSolutions</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.testimonial} ${
              isVisible ? styles.visible : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-left"></i>
              </div>
              <p>
                A habilidade do Saulo de transformar nossa visão em uma
                interface intuitiva foi impressionante. Nossos usuários adoraram
                a experiência, e isso se refletiu diretamente no crescimento dos
                nossos números.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Cliente"
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4>Amanda Silveira</h4>
                  <p>Diretora de Produto, FinanceApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
