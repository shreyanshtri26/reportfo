import React from 'react';
import './VideoKYC.css';

function VideoKYC() {
  return (
    <section className="video-kyc">
      <h3>Video KYC</h3>
      <p className="date">28 May, 2024</p>
      <p>Utkarsh SF Bank FD Plan 2</p>
      <p>
        Deposit Amt: Rs. 80,000 | Tenure: 3 Years | Interest Rate: 8.70%
      </p>
      <button className="complete-now">Complete Now</button>
      <button className="reschedule">Reschedule</button>
    </section>
  );
}

export default VideoKYC;