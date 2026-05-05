function Input({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-gray-800">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
      />
    </div>
  );
}

export default Input;
