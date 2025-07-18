"use client";
import React, { useEffect, useState } from "react";

export default function LastMinuteOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Błąd podczas pobierania danych:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ładowanie ofert...</p>;

  return (
    <div>
      <h2>🌅 Oferty Last Minute</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={offer.image}
              alt={offer.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3>{offer.name}</h3>
            <p>📍 {offer.location}</p>
            <p>💸 {offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
