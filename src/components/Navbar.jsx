import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export const Navbar = ({ activeTab, setActiveTab, onOpenSearch, theme, setTheme }) => {
  const [searchVal, setSearchVal] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchVal.trim()) {
      if (onOpenSearch) onOpenSearch(searchVal.trim());
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => setActiveTab("Converter")} role="button" tabIndex={0}>
          <div className="brand-icon-wrap">
            <svg width="34" height="26" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          <span className="brand-text">
            <span className="brand-name-light">Currency</span>
            <span className="brand-name-blue">Flow</span>
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs" aria-label="Main Navigation">
          {[
            { id: "Converter", label: "Converter" },
            { id: "Rates", label: "Rates" },
            { id: "History", label: "History" },
            { id: "Settings", label: "Settings" }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <span className="active-pill-bar" />}
            </button>
          ))}
        </nav>

        {/* Right Section: Search & Theme Switch */}
        <div className="navbar-right">
          {/* Search Bar */}
          <div
            className="nav-search-bar"
            onClick={() => onOpenSearch && onOpenSearch()}
            role="button"
            tabIndex={0}
          >
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search currency..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="nav-search-input"
            />
            <kbd className="kbd-shortcut">/</kbd>
          </div>

          {/* Theme Toggle Pill */}
          <div
            className="theme-toggle-container"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
            role="button"
            tabIndex={0}
          >
            <span className="theme-sun-icon">
              <BsSunFill />
            </span>
            <div className={`theme-toggle-track ${theme === "dark" ? "is-dark" : "is-light"}`}>
              <div className="theme-toggle-thumb">
                <BsMoonStarsFill className="theme-moon-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
