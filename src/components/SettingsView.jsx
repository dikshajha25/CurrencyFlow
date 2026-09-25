import React from "react";
import { currencies } from "../utils/currencies";

export const SettingsView = ({
  theme,
  setTheme,
  defaultFrom,
  setDefaultFrom,
  defaultTo,
  setDefaultTo,
  precision,
  setPrecision
}) => {
  return (
    <section className="tab-view-container">
      <div className="tab-view-header">
        <div>
          <h2 className="tab-view-title">Preferences & Settings</h2>
          <p className="tab-view-subtitle">Customize default currencies, precision, and application interface</p>
        </div>
      </div>

      <div className="settings-cards-stack">
        {/* Appearance Setting */}
        <div className="settings-row-card">
          <div className="setting-info">
            <h4 className="setting-name">Appearance Mode</h4>
            <p className="setting-desc">Switch between sleek dark cosmic mode and clean high-contrast light mode</p>
          </div>
          <div className="setting-control">
            <div className="segmented-control">
              <button
                className={`segment-btn ${theme === "dark" ? "active" : ""}`}
                onClick={() => setTheme("dark")}
              >
                Dark (Default)
              </button>
              <button
                className={`segment-btn ${theme === "light" ? "active" : ""}`}
                onClick={() => setTheme("light")}
              >
                Light
              </button>
            </div>
          </div>
        </div>

        {/* Default 'From' Currency */}
        <div className="settings-row-card">
          <div className="setting-info">
            <h4 className="setting-name">Default Base Currency</h4>
            <p className="setting-desc">The default source currency selected when opening the application</p>
          </div>
          <div className="setting-control">
            <select
              value={defaultFrom}
              onChange={(e) => setDefaultFrom(e.target.value)}
              className="settings-select"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Default 'To' Currency */}
        <div className="settings-row-card">
          <div className="setting-info">
            <h4 className="setting-name">Default Target Currency</h4>
            <p className="setting-desc">The default currency to convert into</p>
          </div>
          <div className="setting-control">
            <select
              value={defaultTo}
              onChange={(e) => setDefaultTo(e.target.value)}
              className="settings-select"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Decimal Precision */}
        <div className="settings-row-card">
          <div className="setting-info">
            <h4 className="setting-name">Decimal Accuracy</h4>
            <p className="setting-desc">Number of decimal places shown in calculation results</p>
          </div>
          <div className="setting-control">
            <div className="segmented-control">
              {[2, 3, 4].map((p) => (
                <button
                  key={p}
                  className={`segment-btn ${precision === p ? "active" : ""}`}
                  onClick={() => setPrecision(p)}
                >
                  {p} Decimals
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsView;
