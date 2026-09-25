import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackgroundWorldMap from "./components/BackgroundWorldMap";
import CurrencyConverter from "./components/CurrencyConverter";
import PopularConversions from "./components/PopularConversions";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CurrencyModal from "./components/CurrencyModal";
import RatesView from "./components/RatesView";
import HistoryView from "./components/HistoryView";
import SettingsView from "./components/SettingsView";

function App() {
  const [activeTab, setActiveTab] = useState("Converter");
  const [theme, setTheme] = useState("dark");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState("1000");
  const [precision, setPrecision] = useState(2);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState("from"); // "from" or "to"

  // History State
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("currencyflow_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleRecordHistory = (item) => {
    setHistory((prev) => {
      const filtered = prev.filter(
        (h) => !(h.from === item.from && h.to === item.to && h.amount === item.amount)
      );
      const updated = [item, ...filtered].slice(0, 15);
      try {
        localStorage.setItem("currencyflow_history", JSON.stringify(updated));
      } catch (e) {
        console.warn("Storage failed", e);
      }
      return updated;
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("currencyflow_history");
  };

  const handleOpenModal = (target) => {
    setModalTarget(target);
    setIsModalOpen(true);
  };

  const handleModalSelect = (code) => {
    if (modalTarget === "from") {
      setFrom(code);
    } else {
      setTo(code);
    }
  };

  const handleSelectPair = (pairFrom, pairTo) => {
    setFrom(pairFrom);
    setTo(pairTo);
    setActiveTab("Converter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFloatingCurrencyClick = (code) => {
    if (from === code) {
      // toggle to target
      setTo(code === "INR" ? "USD" : "INR");
    } else {
      setTo(code);
    }
    setActiveTab("Converter");
  };

  // Keyboard shortcut listener for "/" to open currency search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        handleOpenModal("to");
      }
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className={`app-root ${theme}-theme`}>
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => handleOpenModal("to")}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === "Converter" && (
          <div className="converter-page-flow">
            {/* World Map Background with Floating Badges */}
            <BackgroundWorldMap onSelectCurrency={handleFloatingCurrencyClick} />

            {/* Central Currency Converter Hero Card */}
            <CurrencyConverter
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              amount={amount}
              setAmount={setAmount}
              onOpenModal={handleOpenModal}
              onRecordHistory={handleRecordHistory}
            />

            {/* Popular Conversions Bar */}
            <PopularConversions
              onSelectPair={handleSelectPair}
              onViewAllRates={() => setActiveTab("Rates")}
            />

            {/* Key Features Row */}
            <Features />
          </div>
        )}

        {activeTab === "Rates" && (
          <RatesView onSelectPair={handleSelectPair} />
        )}

        {activeTab === "History" && (
          <HistoryView
            history={history}
            onClearHistory={handleClearHistory}
            onRerun={(rerunFrom, rerunTo, rerunAmt) => {
              setFrom(rerunFrom);
              setTo(rerunTo);
              setAmount(String(rerunAmt));
              setActiveTab("Converter");
            }}
          />
        )}

        {activeTab === "Settings" && (
          <SettingsView
            theme={theme}
            setTheme={setTheme}
            defaultFrom={from}
            setDefaultFrom={setFrom}
            defaultTo={to}
            setDefaultTo={setTo}
            precision={precision}
            setPrecision={setPrecision}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={setActiveTab} />

      {/* Currency Selection Modal / Popover */}
      <CurrencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleModalSelect}
        currentCode={modalTarget === "from" ? from : to}
        title={modalTarget === "from" ? "Select Source Currency (From)" : "Select Target Currency (To)"}
      />
    </div>
  );
}

export default App;