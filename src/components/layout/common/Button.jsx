function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  fullWidth = false,
}) {
  const base = `px-6 py-3 rounded-full font-semibold transition cursor-pointer ${fullWidth ? "w-full" : ""}`;

  const variants = {
    primary: "text-white hover:opacity-90",
    dark: "text-white hover:bg-gray-800",
    outline:
      "border border-gray-300 text-gray-800 hover:border-gray-500 bg-white",
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
