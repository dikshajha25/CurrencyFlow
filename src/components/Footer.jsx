import React from "react";

export const Footer = ({ onSelectTab }) => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Left: Branding & Tagline */}
        <div className="footer-branding">
          <div className="footer-logo">
            <svg width="28" height="22" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 17.5 C 7 7, 13 6, 17 14 C 21 22, 27 22, 35 7"
                stroke="#0ea5e9"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="5" cy="16.5" r="2.8" fill="#38bdf8" />
              <circle cx="17" cy="14" r="3.2" fill="#60a5fa" />
              <circle cx="33" cy="8" r="2.8" fill="#38bdf8" />
            </svg>
            <span className="footer-brand-name">
              <span className="footer-white">Currency</span>
              <span className="footer-cyan">Flow</span>
            </span>
          </div>
          <p className="footer-tagline">Simple. Fast. Accurate.</p>
        </div>

        {/* Right: Quick Links */}
        <nav className="footer-nav-links" aria-label="Footer Navigation">
          <a
            href="#about"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              alert("CurrencyFlow provides institutional-grade exchange rate data powered by open real-time financial APIs.");
            }}
          >
            About
          </a>
          <a
            href="#data-sources"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Data sources: ExchangeRate-API, Central Bank Feeds, and Open Currency Networks.");
            }}
          >
            Data Sources
          </a>
          <a
            href="#privacy"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Privacy: CurrencyFlow does not store personal credentials or financial keys. All conversions are performed client-side.");
            }}
          >
            Privacy
          </a>
          <a
            href="#contact"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Contact support: support@currencyflow.io");
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
