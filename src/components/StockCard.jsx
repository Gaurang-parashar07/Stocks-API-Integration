const StockCard = ({ stock }) => {
  if (!stock) return null;

  const formatNumber = (num) =>
    num !== undefined && num !== null
      ? Number(num).toLocaleString()
      : "N/A";

  const formatPrice = (num) =>
    num !== undefined && num !== null
      ? `$${Number(num).toFixed(2)}`
      : "N/A";

  const changeColor =
    stock.change > 0 ? "green" : stock.change < 0 ? "red" : "black";

  return (
    <div className="card">
      <h2 className="company-name">{stock.name}</h2>

      <div className="stock-grid">

        <div className="stock-item">
          <span>Symbol</span>
          <strong>{stock.symbol}</strong>
        </div>

        <div className="stock-item">
          <span>Exchange</span>
          <strong>{stock.exchange || "N/A"}</strong>
        </div>

        <div className="stock-item">
          <span>Price</span>
          <strong>{formatPrice(stock.price)}</strong>
        </div>

        <div className="stock-item">
          <span>Change</span>
          <strong style={{ color: changeColor }}>
            {formatPrice(stock.change)}
          </strong>
        </div>

        <div className="stock-item">
          <span>Change %</span>
          <strong style={{ color: changeColor }}>
            {stock.changePercentage
              ? `${stock.changePercentage.toFixed(2)}%`
              : "N/A"}
          </strong>
        </div>

        <div className="stock-item">
          <span>Open</span>
          <strong>{formatPrice(stock.open)}</strong>
        </div>

        <div className="stock-item">
          <span>Previous Close</span>
          <strong>{formatPrice(stock.previousClose)}</strong>
        </div>

        <div className="stock-item">
          <span>Day High</span>
          <strong>{formatPrice(stock.dayHigh)}</strong>
        </div>

        <div className="stock-item">
          <span>Day Low</span>
          <strong>{formatPrice(stock.dayLow)}</strong>
        </div>

        <div className="stock-item">
          <span>52 Week High</span>
          <strong>{formatPrice(stock.yearHigh)}</strong>
        </div>

        <div className="stock-item">
          <span>52 Week Low</span>
          <strong>{formatPrice(stock.yearLow)}</strong>
        </div>

        <div className="stock-item">
          <span>Volume</span>
          <strong>{formatNumber(stock.volume)}</strong>
        </div>

        <div className="stock-item">
          <span>Market Cap</span>
          <strong>{formatNumber(stock.marketCap)}</strong>
        </div>

        <div className="stock-item">
          <span>50 Day Avg</span>
          <strong>{formatPrice(stock.priceAvg50)}</strong>
        </div>

        <div className="stock-item">
          <span>200 Day Avg</span>
          <strong>{formatPrice(stock.priceAvg200)}</strong>
        </div>

      </div>

      <p className="timestamp">
        Last Updated:{" "}
        {stock.timestamp
          ? new Date(stock.timestamp * 1000).toLocaleString()
          : "N/A"}
      </p>
    </div>
  );
};

export default StockCard;