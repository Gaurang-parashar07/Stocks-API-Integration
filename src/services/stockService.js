const API_KEY = import.meta.env.VITE_FMP_API_KEY;

export const fetchStock = async (symbol) => {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const response = await fetch(
    `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error("Stock not found");
  }

  return data[0];
};