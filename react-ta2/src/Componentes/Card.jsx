import React from 'react';
import './Card.css'; // Estilos asociados

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
