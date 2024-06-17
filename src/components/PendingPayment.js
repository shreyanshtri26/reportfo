import React from 'react';
import './PendingPayment.css';

function PendingPayment() {
  return (
    <section className="pending-payment">
      <h3>Pending Payment</h3>
      <p className="date">28 April, 2024</p>
      <p>Bajaj Finserv Corp FD 3</p>
      <p>
        Deposit Amt: Rs. 65,000 | Tenure: 36 Months | Interest Rate: 7.90%
      </p>
      <button className="pay-now">Pay Now</button>
      <button className="cancel-application">Cancel Application</button>
    </section>
  );
}

export default PendingPayment;