import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]); // Set the first account address
      } catch (error) {
        console.error("Error connecting to wallet", error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">LetVote</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#voter-community" className="navbar-link">Voter Community</a>
        <a href="#register-voter" className="navbar-link">Register (Voter)</a>
        <a href="#register-candidate" className="navbar-link">Register (Candidate)</a>
      </div>
      <div className="wallet-container">
        {walletAddress ? (
          <span className="wallet-address">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
        ) : (
          <button className="connect-wallet-btn" onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
