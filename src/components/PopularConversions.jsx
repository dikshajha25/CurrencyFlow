import React from "react";
import { FiArrowRight } from "react-icons/fi";
import FlagIcon from "./FlagIcon";

const popularPairs = [
  {
    from: "USD",
    to: "INR",
    flag: "USD",
    label: "USD → INR",
    rate: "₹83.47"
  },
  {
    from: "EUR",
    to: "INR",
    flag: "EUR",
    label: "EUR → INR",
    rate: "₹100.23"
  },
  {
    from: "GBP",
    to: "INR",
    flag: "GBP",
    label: "GBP → INR",
    rate: "₹115.61"
  },
  {
    from: "USD",
    to: "EUR",
    flag: "USD",
    label: "USD → EUR",
    rate: "€0.9174"
  },
  {
    from: "USD",
    to: "GBP",
    flag: "USD",
    label: "USD → GBP",
    rate: "£0.7832"
  },
  {
    from: "EUR",
    to: "USD",
    flag: "EUR",
    label: "EUR → USD",
    rate: "$1.09"
  }
];

export const PopularConversions = ({ onSelectPair, onViewAllRates }) => {
  return (
    <section className="popular-conversions-section">
      <div className="popular-header">
        <h2 className="popular-title">Popular Conversions</h2>
        <button
          type="button"
          className="view-all-rates-link"
          onClick={onViewAllRates}
        >
          <span>View all rates</span>
          <FiArrowRight className="link-arrow" />
        </button>
      </div>

      <div className="popular-cards-grid">
        {popularPairs.map((pair, idx) => (
          <div
            key={idx}
            className="popular-rate-card"
            onClick={() => onSelectPair && onSelectPair(pair.from, pair.to)}
            role="button"
            tabIndex={0}
            title={`Convert ${pair.from} to ${pair.to}`}
          >
            <div className="card-flag-wrap">
              <FlagIcon code={pair.flag} size={28} />
            </div>
            <div className="card-details">
              <span className="card-pair-label">{pair.label}</span>
              <span className="card-rate-value">{pair.rate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularConversions;
