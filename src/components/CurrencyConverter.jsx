import React, { useState, useEffect } from "react";
import { FiChevronDown, FiInfo, FiArrowRight } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import FlagIcon from "./FlagIcon";
import { currencies } from "../utils/currencies";
import { fetchExchangeRate } from "../utils/api";

export const CurrencyConverter = ({
  from,
  setFrom,
  to,
  setTo,
  amount,
  setAmount,
  onOpenModal,
  onRecordHistory
}) => {
  const [rate, setRate] = useState(0.01198);
  const [result, setResult] = useState("11.98");
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("Sep 25, 2026, 5:42 PM");
  const [isSwapping, setIsSwapping] = useState(false);

  // Format timestamp helper
  const getFormattedTime = () => {
    const now = new Date();
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    };
    return now.toLocaleString("en-US", options);
  };

  const calculateConversion = async (fromCurr, toCurr, amt) => {
    try {
      setLoading(true);
      const exchangeRate = await fetchExchangeRate(fromCurr, toCurr);
      setRate(exchangeRate);

      const numericAmt = parseFloat(String(amt).replace(/,/g, "")) || 0;
      const convertedVal = numericAmt * exchangeRate;

      // Format smartly: if >= 1, 2 decimals; if < 0.01, up to 4 or 6 decimals
      let formattedResult;
      if (convertedVal >= 1) {
        formattedResult = convertedVal.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      } else if (convertedVal > 0) {
        formattedResult = convertedVal.toFixed(4);
      } else {
        formattedResult = "0.00";
      }

      setResult(formattedResult);
      setLastUpdated(getFormattedTime());

      if (onRecordHistory && numericAmt > 0) {
        onRecordHistory({
          from: fromCurr,
          to: toCurr,
          amount: numericAmt,
          result: formattedResult,
          rate: exchangeRate,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        });
      }
    } catch (err) {
      console.error("Conversion error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateConversion(from, to, amount);
  }, [from, to, amount]);

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = from;
    setFrom(to);
    setTo(temp);
    setTimeout(() => setIsSwapping(false), 300);
  };

  const handleAmountChange = (e) => {
    const val = e.target.value;
    // Allow digits and single decimal point
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {
      setAmount(val);
    }
  };

  const fromCurrencyObj = currencies.find((c) => c.code === from) || {
    code: from,
    name: "Indian Rupee",
    symbol: "₹"
  };

  const toCurrencyObj = currencies.find((c) => c.code === to) || {
    code: to,
    name: "US Dollar",
    symbol: "$"
  };

  // Format amount with commas for display in summary
  const displayAmount = (parseFloat(amount) || 0).toLocaleString("en-US");

  // Format 1 FROM = X TO
  const formattedUnitRate = rate < 0.001 ? rate.toFixed(6) : rate < 1 ? rate.toFixed(5) : rate.toFixed(4);

  return (
    <section className="hero-section">
      {/* Live Exchange Rates Pill */}
      <div className="status-badge-container">
        <div className="status-pill">
          <span className="pulsing-green-dot" />
          <span className="status-pill-text">Live Exchange Rates</span>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="hero-header-text">
        <h1 className="hero-title">
          Currency <span className="hero-title-highlight">Converter</span>
        </h1>
        <p className="hero-subtitle">
          Convert currencies instantly with real-time exchange rates.
          <br />
          Fast. Accurate. No sign-up required.
        </p>
      </div>

      {/* Converter Main Card */}
      <div className="converter-card">
        {/* Amount Input Row */}
        <div className="amount-input-block">
          <div className="amount-header-row">
            <label className="amount-label" htmlFor="currency-amount-input">
              Amount
            </label>
            <span className="fiat-badge">Fiat</span>
          </div>

          <div className="amount-input-box">
            <input
              id="currency-amount-input"
              type="text"
              className="amount-number-field"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              autoComplete="off"
            />
            <span className="amount-currency-tag">{from}</span>
          </div>
        </div>

        {/* Currency Selectors Row (From - Swap - To) */}
        <div className="currency-selector-row">
          {/* From Selector */}
          <div className="selector-group">
            <label className="selector-label">From</label>
            <div
              className="currency-select-trigger"
              onClick={() => onOpenModal("from")}
              role="button"
              tabIndex={0}
            >
              <div className="select-left">
                <FlagIcon code={from} size={28} />
                <div className="select-currency-names">
                  <span className="select-code">{from}</span>
                  <span className="select-fullname">{fromCurrencyObj.name}</span>
                </div>
              </div>
              <FiChevronDown className="select-chevron" />
            </div>
          </div>

          {/* Swap Button */}
          <div className="swap-btn-container">
            <button
              type="button"
              className={`converter-swap-btn ${isSwapping ? "swapping" : ""}`}
              onClick={handleSwap}
              title="Swap currencies"
              aria-label="Swap currencies"
            >
              <HiOutlineSwitchHorizontal className="swap-icon" />
            </button>
          </div>

          {/* To Selector */}
          <div className="selector-group">
            <label className="selector-label">To</label>
            <div
              className="currency-select-trigger"
              onClick={() => onOpenModal("to")}
              role="button"
              tabIndex={0}
            >
              <div className="select-left">
                <FlagIcon code={to} size={28} />
                <div className="select-currency-names">
                  <span className="select-code">{to}</span>
                  <span className="select-fullname">{toCurrencyObj.name}</span>
                </div>
              </div>
              <FiChevronDown className="select-chevron" />
            </div>
          </div>
        </div>

        {/* Conversion Result Block */}
        <div className="conversion-result-block">
          <div className="result-prompt-line">
            {displayAmount} {from} =
          </div>

          <div className="result-headline">
            {loading ? (
              <span className="result-loading">Calculating...</span>
            ) : (
              <span className="result-value">
                {result} {to}
              </span>
            )}
          </div>

          <div className="rate-info-line">
            <span>
              1 {from} = {formattedUnitRate} {to}
            </span>
            <span className="info-icon-wrap" title="Mid-market exchange rate">
              <FiInfo className="info-icon" />
            </span>
          </div>

          <div className="update-timestamp-line">
            <span>Last updated: {lastUpdated}</span>
            <span className="live-dot" />
          </div>
        </div>

        {/* Convert Currency Action Button */}
        <button
          type="button"
          className="convert-action-btn"
          onClick={() => calculateConversion(from, to, amount)}
        >
          <span>Convert Currency</span>
          <FiArrowRight className="btn-arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default CurrencyConverter;
