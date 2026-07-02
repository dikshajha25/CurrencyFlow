const BASE_URL = "https://open.er-api.com/v6/latest";

export const fetchExchangeRate = async (from, to) => {
  if (from === to) return 1;

  const response = await fetch(`${BASE_URL}/${from}`);

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }

  const data = await response.json();

  return data.rates[to];
};