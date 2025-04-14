import React, { useState } from 'react';
import '../css/Footer.css';
import { saveContact } from '../../api';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await saveContact(formData);
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({ email: '', name: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Coluna de contatos (alinhada à esquerda) */}
        <div className="footer-column contact-links">
          <h3>Contatos</h3>
          <ul>
            <li>
              <a
                href="https://wa.me/5561986091381"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tel:(61)98609-1381
              </a>
            </li>
            <li>
              <a href="mailto:adrisilva.dev@gmail.com">adrisilva.dev@gmail.com</a>
            </li>
            <li>
              <a
                href="https://github.com/Adriano-Reis-Eng"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna do mapa do site (alinhada ao centro) */}
        <div className="footer-column sitemap">
          <h3>Mapa do Site</h3>
          <ul>
            <li>
              <a href="#banner">Início</a>
            </li>
            <li>
              <a href="#cards">Projetos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#interacao">Interação</a>
            </li>
          </ul>
        </div>

        {/* Coluna de mensagem (alinhada à direita) */}
        <div className="footer-column message">
          <h3>Envie uma mensagem</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status.loading}>
              {status.loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {status.message && (
            <div className={`status-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Adriano Reis. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

