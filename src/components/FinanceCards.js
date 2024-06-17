import React from 'react';
import FinanceCard from './FinanceCard';
import './FinanceCards.css';

function FinanceCards() {
  const cardsData = [
    {
      logo: 'utkarsh-logo.png',
      name: 'Utkarsh Small Finance Bank',
      features: ['Highest Interest Rate', 'RBI Insured'],
      interestRate: '9.10% p.a',
    },
    {
      logo: 'bajaj-logo.png',
      name: 'Bajaj Finserv',
      features: ['Crisil AAA Rated', 'No Video KYC required'],
      interestRate: '8.80% p.a',
    },
    {
      logo: 'shriram-logo.png',
      name: 'Shriram Finance',
      features: ['Crisil AAA Rated', 'No Video KYC required'],
      interestRate: '8.80% p.a',
    },
    {
      logo: 'mahindra-logo.png',
      name: 'Mahindra Finance',
      features: ['Crisil AAA Rated', 'No Video KYC required'],
      interestRate: '8.80% p.a',
    },
  ];

  return (
    <section className="finance-cards">
      {cardsData.map((card, index) => (
        <FinanceCard
          key={index}
          logo={card.logo}
          name={card.name}
          features={card.features}
          interestRate={card.interestRate}
          onBook={() => console.log('Book Now clicked')}
        />
      ))}
    </section>
  );
}

export default FinanceCards;