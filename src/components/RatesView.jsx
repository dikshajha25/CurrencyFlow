import React, { useState, useEffect } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { currencies } from "../utils/currencies";
import { fetchAllRates } from "../utils/api";
import FlagIcon from "./FlagIcon";

export const RatesView = ({ onSelectPair }) => {
  const [base, setBase] = useState("USD");
  const [rates, setRates] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchAllRates(base).then((data) => {
      if (isMounted) {
        setRates(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [base]);

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code !== base &&
      (c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="tab-view-container">
      <div className="tab-view-header">
        <div>
          <h2 className="tab-view-title">Live Exchange Rates</h2>
          <p className="tab-view-subtitle">Compare world currencies against {base} in real time</p>
        </div>

        {/* Base Currency Selector & Search */}
        <div className="tab-view-actions">
          <div className="base-select-wrap">
            <span className="base-label">Base:</span>
            <select
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="base-currency-select"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="table-search-box">
            <FiSearch className="table-search-icon" />
            <input
              type="text"
              placeholder="Filter currencies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="table-search-input"
            />
          </div>
        </div>
      </div>

      {/* Rates Table */}
      <div className="rates-table-wrapper">
        <table className="rates-table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Code</th>
              <th>Rate (1 {base})</th>
              <th>Inverse</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="table-loading-cell">
                  Loading live currency rates...
                </td>
              </tr>
            ) : filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((c) => {
                const rateVal = rates[c.code] || 1;
                const inverseVal = rateVal ? (1 / rateVal).toFixed(4) : "—";
                const displayRate =
                  rateVal >= 100
                    ? rateVal.toFixed(2)
                    : rateVal >= 1
                    ? rateVal.toFixed(4)
                    : rateVal.toFixed(6);

                return (
                  <tr key={c.code} className="rates-table-row">
                    <td>
                      <div className="table-currency-col">
                        <FlagIcon code={c.code} size={24} />
                        <span className="table-curr-name">{c.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="table-code-badge">{c.code}</span>
                    </td>
                    <td>
                      <span className="table-rate-num">
                        {c.symbol} {displayRate}
                      </span>
                    </td>
                    <td>
                      <span className="table-inverse-num">
                        {inverseVal} {base}
                      </span>
                    </td>
                    <td>
                      <button
                        className="table-convert-btn"
                        onClick={() => onSelectPair(base, c.code)}
                        title={`Convert ${base} to ${c.code}`}
                      >
                        <span>Convert</span>
                        <FiArrowRight />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="table-loading-cell">
                  No currencies match "{search}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RatesView;
