const API_KEY = "b8bKRyJX4SNoYfw5PhF8QDnZ3nzQc7z0";

export const fetchStock = async (symbol) => {
  const response = await fetch(
    `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch stock data");
  }

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error("Stock not found");
  }

  return data[0];
};