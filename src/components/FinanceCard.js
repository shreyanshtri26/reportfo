import React from 'react';
import './FinanceCard.css';

function FinanceCard({ logo, name, features, interestRate, onBook }) {
  return (
    <div className="finance-card">
      <img src={logo} alt={name} />
      <h3>{name}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <span className="checkmark">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <p>Interest Upto {interestRate}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
}

export default FinanceCard;