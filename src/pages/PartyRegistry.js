import React, { useState } from "react";

const PartyRegistry = () => {
  const [pollName, setPollName] = useState("");
  const [about, setAbout] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [walletAddress, setWalletAddress] = useState("3543t3fgf4......");
  const [candidates, setCandidates] = useState([{ name: "", address: "" }]);
  
  return (
    <div className="flex p-8 bg-white min-h-screen">
      {/* Left Form Section */}
      <div className="w-1/2 bg-orange-400 p-6 rounded-lg shadow-md">
        <h2 className="text-white text-2xl font-bold mb-4">Create a Poll</h2>
        
        {/* Upload Background */}
        <div className="mb-4 flex flex-col items-center">
          <button className="bg-gray-200 p-2 rounded-md">Upload Background</button>
        </div>

        {/* Input Fields */}
        <input type="text" placeholder="Enter name" className="w-full p-2 mb-3 rounded-md" value={pollName} onChange={(e) => setPollName(e.target.value)} />
        <textarea placeholder="Write.." className="w-full p-2 mb-3 rounded-md" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        <input type="date" className="w-full p-2 mb-3 rounded-md" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" className="w-full p-2 mb-3 rounded-md" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <input type="text" className="w-full p-2 mb-3 rounded-md bg-gray-300" value={walletAddress} readOnly />

        {/* Candidate Section */}
        <div className="bg-orange-300 p-4 rounded-md">
          <h3 className="text-white text-lg font-semibold">Add Candidate</h3>
          <input type="text" placeholder="Enter name" className="w-full p-2 mb-2 rounded-md" />
          <input type="text" placeholder="Enter address" className="w-full p-2 mb-2 rounded-md" />
          <button className="text-blue-600 underline">Add image</button>
        </div>
      </div>
      
      {/* Right Image Grid */}
      <div className="w-1/2 grid grid-cols-3 gap-2 p-4">
        <img src="/vote1.jpg" alt="Voting" className="rounded-lg" />
        <img src="/vote2.jpg" alt="Voting" className="rounded-lg" />
        <img src="/vote3.jpg" alt="Voting" className="rounded-lg" />
        <img src="/vote4.jpg" alt="Voting" className="rounded-lg" />
        <img src="/vote5.jpg" alt="Voting" className="rounded-lg" />
        <img src="/vote6.jpg" alt="Voting" className="rounded-lg" />
      </div>
    </div>
  );
};

export default PartyRegistry;
