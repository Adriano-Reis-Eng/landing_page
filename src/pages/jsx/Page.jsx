import React from 'react';
import '../css/Page.css';
import Navbar from '../../components/jsx/Navbar.jsx';
import FunFact from '../../components/jsx/Atribuicoes.jsx';
import Footer from '../../components/jsx/Footer.jsx';
import TechInfo from '../../components/jsx/TechInfo.jsx';

const Page = () => {
    const handleSaibaMais = () => {
        window.location.href = 'assets/html/projeto.html';
    };

    return (
        <div className="landing-page">
            <Navbar />
            
            <section id="banner" className="conteiner-banner">
                <div className="imagem-banner">
                    <img src="tecnologia.jpg" alt="Escaneamento de retina"></img>
                </div>
                <div className="texto-banner">
                    <h1>Eu sou, Adriano Reis!</h1>
                    <h3>Engenheiro de Software</h3>
                    <a href="#sobre" className="button">Sobre</a>
                </div>
                <div className="roll-button">
                    <a href="#cards" className="roll-button"></a>
                </div>
            </section>

            <section id="cards" className="conteiner-cards">
                <div className="grid-cards">
                    <div className="card" onclick=''>
                        <div className="card-header">
                            <i class="img-card1"></i>
                        </div>
                        <div className="card-content">
                            <h1 className="card-title">Engenharia de Software</h1>
                            <p className="card-text">Projetos, desenvolvimento, testes e implementações.</p>
                            <h2 className="card-text">Tecnologias</h2>
                            <p className='card-text'>HTML, CSS, Javascript, C#, SQLServer, SqlLite.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <i class="img-card2"></i>
                        </div>
                        <div className="card-content">
                            <h1 className="card-title">Sites</h1>
                            <p className="card-text">Desenvolvimento de sites institucionais, landing pages e blogs</p>
                            <h2 className="card-text">Tecnologias</h2>
                            <p className='card-text'>HTML,CSS,Javascript e React.js</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <i class="img-card3"></i>
                        </div>
                        <div class="card-content">
                            <h1 class="card-title">Aplicativos</h1>
                            <p class="card-text">Desenvolvimento de aplicativos Desktop e Mobile</p>
                            <h2 className="card-text">Tecnologias</h2>
                            <p class="card-text">.Net Maui, Blazor web APP, C#</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <i class="img-card4"></i>
                        </div>
                        <div class="card-content">
                            <h1 class="card-title">APIs</h1>
                            <p class="card-text">Desenvolvimento de APIs Asp.Net core.</p>
                            <h2 className="card-text">Tecnologias</h2>
                            <p class="card-text">Hospedagem de sites, registro de dominio, certificado SSL.</p>
                        </div>
                    </div>
                </div>
                <div class="roll-button">
                    <a href="#sobre" class="roll-button"></a>
                </div>
            </section>

            <section id='sobre' className='conteiner-sobre'>
                <div className='grid-sobre'>
                    <div className='banner-sobre'>
                        <h1>"Desenvolver um Software é transformar desafios em soluções digitais inteligentes"</h1>
                        <h3>-Adriano Reis,<em>&nbsp;ENG-SOFT-&nbsp;</em></h3>
                    </div>
                    <div className='image-sobre'>
                        <img src="logoengsoft.png" alt="Pessoa usando um computador"></img>                        
                    </div>
                    <div className='competencia-sobre'>
                        <h2>Atribuições de um Engenherio de Software</h2>
                        <div className="tooltip">
                            <h3>Planejamento e análise</h3>
                            <span className="tooltiptext">Definição de requisitos, levantamento de necessidades e arquitetura do sistema.</span>
                        </div>

                        <div className="tooltip">
                            <h3>Teste e qualidade</h3>
                            <span className="tooltiptext">Verificação do funcionamento correto e garantia da qualidade do software.</span>
                        </div>

                        <div className="tooltip">
                            <h3>Manutenção e suporte</h3>
                            <span className="tooltiptext">Correções de erros e atualizações do sistema após a entrega.</span>
                        </div>

                        <div className="tooltip">
                            <h3>Integração e colaboração</h3>
                            <span className="tooltiptext">Trabalho em equipe, comunicação e uso de ferramentas colaborativas.</span>
                        </div>
                    </div>
                    <div className='texto-sobre'>
                        <h1>Cursos:</h1>
                        <div className='cursos-sobre'>
                            <h3>Engenharia de Software - Faculdade IESB</h3>
                            <h3>Desenvolvedor Back-End - Senai</h3>
                            <h3>Desenvolvedor Full-Stack - Senai</h3>
                            <h3>Desenvolvimento de aplicativos .Net Maui - Udemy</h3>
                        </div>
                    </div>
                </div>
                <div className="roll-button">
                    <a href="#tecnologias" className="roll-button"></a>
                </div>
            </section>

            <section id="tecnologias" className='conteiner-tecnologias'>
                <TechInfo />
                <div className="roll-button">
                    <a href="#interacao" className="roll-button"></a>
                </div>
            </section>

            <section id='interacao' className='conteiner-interacao'>
                <FunFact />
                <div className="roll-button">
                    <a href="#footer" className="roll-button"></a>
                </div>
            </section>

            <section id='footer' >
                <Footer />
            </section>
        </div>
    );
};

export default Page;
