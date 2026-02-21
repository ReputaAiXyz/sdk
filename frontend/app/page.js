"use client";

import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";

export default function Home() {
  const [score, setScore] = useState(null);

  const fetchScore = async () => {
    const res = await fetch("http://localhost:5000/api/reputation/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        interactions: 10,
        reliability: 80
      })
    });

    const data = await res.json();
    setScore(data.reputationScore);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Reputa AI</h1>
      <p>On-chain Identity & Reputation Layer</p>

      <ConnectWallet />

      <button onClick={fetchScore}>Calculate Reputation</button>

      {score && <h2>Reputation Score: {score}</h2>}
    </main>
  );
}
