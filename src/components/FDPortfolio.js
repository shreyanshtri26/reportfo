import React from 'react';
import './FDPortfolio.css';


function FDPortfolio() {
  return (
    <section className="fd-portfolio">
      <h2>Your FD Portfolio</h2>
      <select>
        <option>Deposit Amt</option>
      </select>
      <div className="pie-chart">
        {/* Add pie chart component */}
      </div>
      <ul className="legend">
        <li>
          <span className="color-box bajaj-finserv"></span>
          Bajaj Finserv (25%)
        </li>
        <li>
          <span className="color-box shriram-finance"></span>
          Shriram Finance (20%)
        </li>
        <li>
          <span className="color-box mahindra-finance"></span>
          Mahindra Finance (15%)
        </li>
        <li>
          <span className="color-box utkarsh-bank"></span>
          Utkarsh Small Finance Bank (40%)
        </li>
      </ul>
    </section>
  );
}

export default FDPortfolio;
