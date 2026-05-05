import { useParams, useNavigate } from "react-router-dom";
import useCrypto from "../hooks/useCrypto";
import PriceChart from "../components/crypto/PriceChart";
import Button from "../components/common/Button";

function AssetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: crypto, loading } = useCrypto(id);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!crypto) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-10">
        <p className="text-gray-500 mb-4">Asset not found.</p>
        <Button onClick={() => navigate("/explore")}>← Back to Explore</Button>
      </main>
    );
  }

  const positive = crypto.change >= 0;

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* Back */}
      <button
        onClick={() => navigate("/explore")}
        className="text-blue-600 hover:underline text-sm mb-6 block"
      >
        ← Back to Explore
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg">
          {crypto.symbol.slice(0, 2)}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{crypto.name}</h1>
          <p className="text-gray-400">{crypto.symbol}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <p className="text-5xl font-bold text-gray-900">
          ${crypto.price.toLocaleString()}
        </p>
        <p
          className={`text-lg mt-1 ${positive ? "text-green-500" : "text-red-500"}`}
        >
          {positive ? "+" : ""}
          {crypto.change}% today
        </p>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <PriceChart positive={positive} />
      </div>

      {/* Buy/Sell Buttons */}
      <div className="flex gap-4 mb-8">
        <Button fullWidth onClick={() => navigate("/signup")}>
          Buy
        </Button>
        <Button fullWidth variant="outline">
          Sell
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Market Cap", value: crypto.marketCap },
          { label: "24h Volume", value: crypto.volume },
          { label: "Circulating Supply", value: crypto.supply },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          About {crypto.name}
        </h2>
        <p className="text-gray-500 leading-relaxed">{crypto.description}</p>
      </div>
    </main>
  );
}

export default AssetDetail;
