import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [votersCount, setVotersCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data for candidates and voters (replace with your actual API calls)
    const fetchCounts = async () => {
      try {
        const candidates = await fetch("/api/candidates");
        const voters = await fetch("/api/voters");

        const candidatesData = await candidates.json();
        const votersData = await voters.json();

        setCandidatesCount(candidatesData.length);
        setVotersCount(votersData.length);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="logo">LetVote</div>
        <div className="dropdown">
          <button className="dropdown-button">Wallet Code ▼</button>
          <div className="dropdown-menu">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/register-candidate")}>Register (Candidate)</button>
            <button onClick={() => navigate("/register-voter")}>Register (Voter)</button>
            <button onClick={() => navigate("/community")}>Voter Community</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="stat-card">
          <p>No Candidate</p>
          <div className="stat-value">{candidatesCount}</div>
        </div>
        <div className="stat-card">
          <p>No Voters</p>
          <div className="stat-value">{votersCount}</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;