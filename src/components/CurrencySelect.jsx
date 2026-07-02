import { currencies } from "../utils/currencies";

const CurrencySelect = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="currency-box">
      <label>{label}</label>

      <select
        value={value}
        onChange={onChange}
      >
        {currencies.map((currency) => (
          <option
            key={currency.code}
            value={currency.code}
          >
            {currency.flag} {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;