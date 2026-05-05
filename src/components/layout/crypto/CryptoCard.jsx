import { useNavigate } from "react-router-dom";

function CryptoCard({ crypto }) {
  const navigate = useNavigate();
  const positive = crypto.change >= 0;

  return (
    <div
      onClick={() => navigate(`/asset/${crypto.id}`)}
      className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-2 cursor-pointer transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
          {crypto.symbol.slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{crypto.name}</p>
          <p className="text-gray-400 text-sm">{crypto.symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">
          ${crypto.price.toLocaleString()}
        </p>
        <p
          className={`text-sm font-medium ${positive ? "text-green-500" : "text-red-500"}`}
        >
          {positive ? "+" : ""}
          {crypto.change}%
        </p>
      </div>
    </div>
  );
}

export default CryptoCard;
