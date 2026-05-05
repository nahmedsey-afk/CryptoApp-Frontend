import { useState, useEffect } from "react";
import { cryptos as localCryptos } from "../data/cryptos";
import { getAllCryptos } from "../services/api";

function useCrypto(id = null) {
  const [data, setData] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try fetching from backend first
        const res = await getAllCryptos();
        const backendCryptos = res.data.map((c) => ({
          id: c._id,
          name: c.name,
          symbol: c.symbol,
          price: c.price,
          change: c.change24h,
          marketCap: `GHS ${(c.price * 13000000).toLocaleString()}`,
          volume: `GHS ${(c.price * 1000000).toLocaleString()}`,
          supply: "N/A",
          image: c.image,
          description: `${c.name} (${c.symbol}) is a cryptocurrency currently trading at GHS ${c.price.toLocaleString()}.`,
        }));

        if (id) {
          const found = backendCryptos.find(
            (c) => c.id === id || c.name.toLowerCase() === id.toLowerCase()
          );
          setData(found || localCryptos.find((c) => c.id === id) || null);
        } else {
          setData(backendCryptos.length > 0 ? backendCryptos : localCryptos);
        }
      } catch {
        // Fallback to local data if backend is unavailable
        if (id) {
          setData(localCryptos.find((c) => c.id === id) || null);
        } else {
          setData(localCryptos);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading };
}

export default useCrypto;
