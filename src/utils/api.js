import { fallbackRates } from "./currencies";

const BASE_URL = "https://open.er-api.com/v6/latest";
const rateCache = new Map();

export const fetchExchangeRate = async (from, to) => {
  if (from === to) return 1;

  const cacheKey = `${from}_${to}`;
  const now = Date.now();
  const cached = rateCache.get(cacheKey);

  if (cached && now - cached.timestamp < 1000 * 60 * 15) {
    return cached.rate;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${BASE_URL}/${from}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.rates && data.rates[to] !== undefined) {
      const rate = data.rates[to];
      rateCache.set(cacheKey, { rate, timestamp: now });
      return rate;
    }
    throw new Error("Target rate not found in response");
  } catch (err) {
    console.warn(`Exchange rate fetch failed for ${from} -> ${to}, using reliable baseline fallback`, err);
    
    // Check fallback table
    if (fallbackRates[from] && fallbackRates[from][to] !== undefined) {
      return fallbackRates[from][to];
    }
    if (fallbackRates[to] && fallbackRates[to][from] !== undefined) {
      return 1 / fallbackRates[to][from];
    }
    // Calculate via USD intermediary
    if (fallbackRates.USD[from] && fallbackRates.USD[to]) {
      return fallbackRates.USD[to] / fallbackRates.USD[from];
    }

    // Default approximation
    return 1;
  }
};

export const fetchAllRates = async (base = "USD") => {
  try {
    const response = await fetch(`${BASE_URL}/${base}`);
    if (response.ok) {
      const data = await response.json();
      return data.rates || fallbackRates[base] || fallbackRates.USD;
    }
  } catch (e) {
    console.warn("Using fallback rates for all rates view", e);
  }
  return fallbackRates[base] || fallbackRates.USD;
};