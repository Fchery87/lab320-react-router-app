import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// This is to establish the API
export default function Price() {
  const apiKey = "db553838-be30-4c53-a798-016b86ab7290";
  const { symbol } = useParams();
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  // This is to fetch the coin data.
  const getCoin = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  }, [url]);

  useEffect(() => {
    getCoin();
  }, [getCoin]);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const showError = () => {
    return <h1>Error: {error}</h1>;
  };

  return error ? showError() : coin && coin.rate ? loaded() : loading();
}
