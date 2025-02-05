import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreatePoll = () => {
    navigate("/party-registry");
  };

  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1>Vote easy, Vote Safely</h1>
        <p>LetVote is a safe and secure place to vote and create a poll.</p>
        <button className="create-poll-btn" onClick={handleCreatePoll}>
          Create Poll
        </button>

        <div className="image-grid">
          <img src="/voters.jpg" alt="Voting" />
          <img src="/2images.jpg" alt="Voting" />
          <img src="/1Untitled.jpg" alt="Voting" />
          <img src="/1Untitled.jpg" alt="Voting" />
          <img src="/2images.jpg" alt="Voting" />
          <img src="/voters.jpg" alt="Voting" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
