import { useEffect, useState } from "react";

import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";
import ResultCard from "./ResultCard";
import History from "./History";

import { fetchExchangeRate } from "../utils/api";

const CurrencyCard = () => {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");

  const [rate, setRate] = useState(1);
  const [result, setResult] = useState("0.00");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("currency-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const convert = async () => {
      try {
        setLoading(true);
        setError("");

        const exchangeRate = await fetchExchangeRate(from, to);

        setRate(exchangeRate);

        const converted = (
          Number(amount) * exchangeRate
        ).toFixed(2);

        setResult(converted);

        const text = `${amount} ${from} → ${converted} ${to}`;

        setHistory((prev) => {
          const updated = [
            text,
            ...prev.filter((item) => item !== text),
          ].slice(0, 5);

          localStorage.setItem(
            "currency-history",
            JSON.stringify(updated)
          );

          return updated;
        });
      } catch {
        setError("Unable to fetch exchange rate.");
      } finally {
        setLoading(false);
      }
    };

    convert();
  }, [amount, from, to]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="card">
      <div className="header">

        <h1 className="title">
        💱 CurrencyFlow
        </h1>

        <p className="subtitle">
        Fast • Accurate • Real-Time
        </p>

      </div>

      <AmountInput
        amount={amount}
        setAmount={setAmount}
      />

      <div className="currency-row">
        <CurrencySelect
          label="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <SwapButton onSwap={handleSwap} />

        <CurrencySelect
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <ResultCard
        amount={amount}
        from={from}
        to={to}
        result={result}
        rate={rate}
        loading={loading}
        error={error}
      />

      <History history={history} />

      <div className="footer">

        Powered by Currency API

        </div>
    </div>
  );
};

export default CurrencyCard;