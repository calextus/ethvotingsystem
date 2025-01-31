import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section: Logo & Social Icons */}
        <div className="footer-left">
          <h2 className="footer-title">LetVote</h2>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search our documents" />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="footer-middle">
          <ul>
            <li><a href="#documentary">Documentary</a></li>
            <li><a href="#guide">Guide</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* Right Section: Navigation & Contact */}
        <div className="footer-right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#candidates">Candidates</a></li>
            <li><a href="#voters">Voters</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
          <div className="contact-info">
            <h3>Contact</h3>
            <p>Maseru, Lesotho</p>
            <p>+266 0000 0000</p>
            <p>letvote2025@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Line & Legal Links */}
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#privacy">Privacy & Policy</a>
          <a href="#cookies">Cookies</a>
          <a href="#terms">Terms</a>
        </div>
        <p className="copyright">© LetVote 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
