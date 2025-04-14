import React, { useState } from 'react';
import '../css/Footer.css';
import { saveContact } from '../../api';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',       
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^(\d{2})?[\s-]?(\d{5}|\d{4})[\s-]?(\d{4})$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validação em tempo real
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Email inválido' : ''
      }));
    }
    if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: value && !validatePhone(value) ? 'Telefone inválido' : ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação final antes de enviar
    const emailError = !validateEmail(formData.email) ? 'Email inválido' : '';
    const phoneError = !validatePhone(formData.phone) ? 'Telefone inválido' : '';
    
    if (emailError || phoneError) {
      setErrors({
        email: emailError,
        phone: phoneError
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const params = new URLSearchParams();
      params.append('nome', formData.name);
      params.append('email', formData.email);
      params.append('telefone', String(formData.phone).replace(/\D/g, ''));
      params.append('mensagem', formData.message);

      const apiUrl = `https://script.google.com/macros/s/AKfycbxOPQwlJ6J7nY-eevM9qe1dz27k9FfLknNzgISe3dafaa_mef9-uSKRzT2QMiq3u3Nj/exec?${params.toString()}`;
      
      console.log('URL da API:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({ email: '', phone: '' });
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
          <h3>Entre em Contato</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu Nome"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu Email"
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Seu Telefone (ex: 11 99999-9999)"
                required
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua Mensagem"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={status.loading}>
              {status.loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status.message && (
              <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Adriano Reis. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

