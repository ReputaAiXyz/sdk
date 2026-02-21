"use client";

import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet() {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAddress(accounts[0]);
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected: {address}</p>}
    </div>
  );
}
