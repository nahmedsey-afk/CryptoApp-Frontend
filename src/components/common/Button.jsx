function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  fullWidth = false,
}) {
  const base = `px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 active:scale-[0.98] ${fullWidth ? "w-full" : ""}`;

  const variants = {
    primary: "text-white hover:bg-blue-700 shadow-sm",
    dark: "text-white hover:bg-gray-800 shadow-sm",
    outline:
      "border border-gray-300 text-gray-800 hover:border-gray-500 hover:bg-gray-50 bg-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
      style={
        variant === "dark"
          ? { backgroundColor: "#000000" }
          : variant === "primary"
            ? { backgroundColor: "#1652F0" }
            : {}
      }
    >
      {children}
    </button>
  );
}

export default Button;
