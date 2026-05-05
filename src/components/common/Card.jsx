function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
