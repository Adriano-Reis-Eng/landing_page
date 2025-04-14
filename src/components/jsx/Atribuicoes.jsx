import React, { useState } from 'react';
import '../css/Atribuicoes.css';

const FunFact = () => {
  const facts = [
    " Esta interação ao clicar o botão para mostrar os textos é feita com funções JavaScript no React.",
    " O React foi criado pelo Facebook em 2011.",
    " React é uma biblioteca JavaScript para criar interfaces de usuário.",
    " Hooks foram introduzidos no React 16.8 para gerenciar estado e efeitos.",
    " O Virtual DOM permite atualizações eficientes da interface.",
    " Componentes reutilizáveis são a base do desenvolvimento com React.",
    " JSX é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript.",
    " O React Native permite criar aplicativos móveis usando os mesmos princípios do React.",
    " O React possui uma grande comunidade e vasto ecossistema de bibliotecas.",
    " O uso de props permite passar dados entre componentes de forma declarativa."
  ];
  
  const [fact, setFact] = useState("Clique no botão para ver um fato sobre React!");

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div className="interactive-container">
      <h2>Este site foi desenvolvido usando React.js</h2>
      <h2 className='fatosh2'>Usando as funções vamos ver alguns fatos sobre React!</h2>
      <p>{fact}</p>
      <button onClick={generateRandomFact}>Gerar Fato</button>
    </div>
  );
};

export default FunFact;