import React from "react";
import { FiTrash2, FiRepeat, FiClock } from "react-icons/fi";
import FlagIcon from "./FlagIcon";

export const HistoryView = ({ history, onClearHistory, onRerun }) => {
  return (
    <section className="tab-view-container">
      <div className="tab-view-header">
        <div>
          <h2 className="tab-view-title">Conversion History</h2>
          <p className="tab-view-subtitle">Review your past currency conversions and calculations</p>
        </div>

        {history && history.length > 0 && (
          <button className="clear-history-btn" onClick={onClearHistory}>
            <FiTrash2 />
            <span>Clear History</span>
          </button>
        )}
      </div>

      <div className="history-list-wrapper">
        {history && history.length > 0 ? (
          <div className="history-cards-grid">
            {history.map((item, idx) => (
              <div key={idx} className="history-record-card">
                <div className="history-flags-row">
                  <div className="history-pair-flags">
                    <FlagIcon code={item.from} size={24} />
                    <span className="history-arrow">→</span>
                    <FlagIcon code={item.to} size={24} />
                  </div>
                  <div className="history-time-tag">
                    <FiClock />
                    <span>{item.timestamp || "Just now"}</span>
                  </div>
                </div>

                <div className="history-calc-main">
                  <div className="history-from-val">
                    {item.amount.toLocaleString()} {item.from}
                  </div>
                  <div className="history-equals">=</div>
                  <div className="history-to-val">
                    {item.result} {item.to}
                  </div>
                </div>

                <div className="history-footer-row">
                  <span className="history-unit-rate">
                    1 {item.from} = {item.rate < 0.01 ? item.rate.toFixed(5) : item.rate.toFixed(4)} {item.to}
                  </span>
                  <button
                    className="history-rerun-btn"
                    onClick={() => onRerun(item.from, item.to, item.amount)}
                    title="Load into converter"
                  >
                    <FiRepeat />
                    <span>Use Pair</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="history-empty-state">
            <div className="empty-icon-wrap">
              <FiClock size={36} />
            </div>
            <h3>No conversions yet</h3>
            <p>Your recent currency conversions will automatically appear here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HistoryView;
