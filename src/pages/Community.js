import React, { useState, useEffect } from 'react';
import './Community.css'; // Assuming you have a CSS file for styling
import { ethers } from 'ethers';

const Community = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setWalletConnected(true);
        setWalletAddress(accounts[0]);
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        checkWalletConnection();
      } catch (error) {
        console.error("User denied account access or error occurred", error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this page.');
    }
  };

  return (
    <div className="community-container">
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <h2>Connected Wallet Address: {walletAddress}</h2>
          <div className="address-list">
            <p>09JUjhouh9......</p>
            <p>07BUjho779......</p>
            <p>09JUjhouh9......</p>
            <p>07BUjho779......</p>
            <p>09JUjhouh9......</p>
            <p>07BUjho779......</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;