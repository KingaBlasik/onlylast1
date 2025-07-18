'use client';

import { useEffect, useState } from 'react';

export default function LastMinuteOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('/api/offers')
      .then(res => res.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <section>
      <h2>Last Minute Oferty</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {offers.map(offer => (
          <div key={offer.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src={offer.image} alt={offer.name} width="100%" />
            <h3>{offer.name}</h3>
            <p>{offer.location}</p>
            <strong>{offer.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
