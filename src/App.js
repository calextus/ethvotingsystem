import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import "./App.css"; // Make sure to create this file for styling
import { useNavigate } from "react-router-dom"; // For navigation

const LandingPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } else {
        alert("Please install a MetaMask wallet to connect.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">LetVote</div>
        <button className="connect-button" onClick={connectWallet}>
          {walletAddress ? walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4) : "Connect Wallet"}
        </button>
      </header>

      <main className="main-content">
        <h1>Please Connect Your Wallet</h1>
        <button className="create-panel-button" onClick={goToDashboard}>
          Create Panel
        </button>
      </main>
    </div>
  );
};

export default LandingPage;