import { Link } from "react-router-dom";

export default function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Tether", symbol: "USDT" },
    { name: "Binance Coin", symbol: "BNB" },
    { name: "USD Coin", symbol: "USDC" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Cardano", symbol: "ADA" },
    { name: "Dogecoin", symbol: "DOGE" },
    { name: "Solana", symbol: "SOL" },
    { name: "Polkadot", symbol: "DOT" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Shiba Inu", symbol: "SHIB" },
    { name: "Avalanche", symbol: "AVAX" },
    { name: "TRON", symbol: "TRX" },
    { name: "Dai", symbol: "DAI" },
    { name: "Monero", symbol: "XMR" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Cosmos", symbol: "ATOM" },
    { name: "Algorand", symbol: "ALGO" }
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;
        return (
          <Link to={`/price/${symbol}`} key={symbol}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
