import { useState , useEffect} from "react";
import "./index.css";
import { fetchStock } from "./services/stockService";
import { getCache, setCache } from "./utils/cache";
import StockCard from "./components/StockCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import React from "react";


function App() {
  const [symbol, setSymbol] = useState("");
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!symbol.trim()) return;

    try {
      setLoading(true);
      setError("");
      setStock(null);

      const upperSymbol = symbol.toUpperCase();

      const cached = getCache(upperSymbol);
      if (cached) {
        setStock(cached);
        setLoading(false);
        return;
      }

      const data = await fetchStock(upperSymbol);
      setStock(data);
      setCache(upperSymbol, data);

    } catch (err) {
      setError("Failed to fetch stock data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">

        <h1 className="title">Stock Search Dashboard</h1>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter stock symbol (AAPL)"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {stock && <StockCard stock={stock} />}

      </div>
    </div>
  );
}

export default App;