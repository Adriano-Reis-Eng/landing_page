import React from 'react';
import '../css/TechInfo.css';

const techData = [
  {
    name: "HTML/CSS",
    description: "Essas tecnologias são a base para estruturar e estilizar páginas web. Ideais para projetos institucionais, blogs e landing pages.",
    projects: ["Sites Institucionais", "Portfólios", "Blogs"]
  },
  {
    name: "JavaScript",
    description: "Linguagem de programação que torna os sites interativos e dinâmicos. Fundamental para desenvolvimento front-end e back-end (com Node.js).",
    projects: ["Web Applications", "Single Page Applications (SPAs)", "Projetos interativos"]
  },
  {
    name: "React.js",
    description: "Biblioteca JavaScript para criar interfaces de usuário de forma componentizada, facilitando o desenvolvimento e manutenção de aplicações modernas.",
    projects: ["SPAs", "Dashboards", "Aplicações interativas"]
  },
  {
    name: "C#",
    description: "Linguagem robusta usada para desenvolvimento em plataforma .NET, ideal para aplicações empresariais, desktop e web.",
    projects: ["APIs", "Sistemas corporativos", "Aplicativos Desktop"]
  },
  {
    name: "Blazor Web App",
    description: "Framework da plataforma .NET para construir aplicações web interativas utilizando C# no lugar de JavaScript.",
    projects: ["Sistemas Web Corporativos", "Dashboards Interativos", "Aplicações de Formulário", "Portais Administrativos"]
  },
  {
    name: ".NET MAUI",
    description: "Framework da plataforma .NET para criação de aplicações nativas multiplataforma com uma única base de código em C# e XAML.",
    projects: ["Aplicativos Mobile (Android e iOS)", "Aplicações Desktop (Windows e macOS)", "Sistemas com interface unificada para múltiplas plataformas"]
  },
  {
    name: "SQLServer / SQLite",
    description: "Sistemas de gerenciamento de banco de dados, utilizados para armazenar e gerenciar dados de forma estruturada.",
    projects: ["Sistemas de Gestão", "Aplicações que necessitam de persistência robusta de dados"]
  }
];

const TechInfo = () => {
  return (
    <section className="tech-info">
      <h2>Tecnologias e suas Finalidades</h2>
      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div className="tech-card" key={index}>
            <h3>{tech.name}</h3>
            <p className="tech-description">{tech.description}</p>
            <p className="tech-projects">
              <strong>Projetos indicados:</strong> {tech.projects.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechInfo;
