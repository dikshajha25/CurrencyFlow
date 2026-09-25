import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { currencies } from "../utils/currencies";
import FlagIcon from "./FlagIcon";

export const CurrencyModal = ({ isOpen, onClose, onSelect, currentCode, title = "Select Currency" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm("");
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.country && c.country.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const popularCodes = ["USD", "EUR", "GBP", "INR", "JPY", "CAD", "AUD", "CHF", "CNY", "AED"];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>
        </div>

        {/* Search Input */}
        <div className="modal-search-wrapper">
          <FiSearch className="modal-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="modal-search-input"
            placeholder="Search currency code, name or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
              <FiX />
            </button>
          )}
        </div>

        {/* Popular Quick Pills */}
        <div className="popular-pills-row">
          <span className="popular-label">Popular:</span>
          {popularCodes.map((code) => (
            <button
              key={code}
              className={`popular-tag-btn ${currentCode === code ? "active" : ""}`}
              onClick={() => {
                onSelect(code);
                onClose();
              }}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Currency List */}
        <div className="modal-currency-list">
          {filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((c) => (
              <div
                key={c.code}
                className={`currency-list-item ${currentCode === c.code ? "selected" : ""}`}
                onClick={() => {
                  onSelect(c.code);
                  onClose();
                }}
              >
                <div className="item-left">
                  <FlagIcon code={c.code} size={30} />
                  <div className="item-info">
                    <span className="item-code">{c.code}</span>
                    <span className="item-name">{c.name}</span>
                  </div>
                </div>
                <div className="item-right">
                  <span className="item-symbol">{c.symbol}</span>
                  {currentCode === c.code && <span className="item-checkmark">✓</span>}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results-msg">No currencies found matching "{searchTerm}"</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyModal;
