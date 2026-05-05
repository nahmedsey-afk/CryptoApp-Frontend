function PriceChart({ positive = true }) {
  const heights = [40, 55, 45, 60, 50, 70, 65, 80, 72, 85, 78, 90];

  return (
    <div className="h-40 bg-blue-50 rounded-2xl flex items-end px-4 gap-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm opacity-70 ${positive ? "bg-blue-500" : "bg-red-400"}`}
          style={{ height: `${h}%` }}
        ></div>
      ))}
    </div>
  );
}

export default PriceChart;
