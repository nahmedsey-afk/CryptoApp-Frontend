import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { registerUser } from "../services/api";

function SignUp() {
  const [step, setStep] = useState("type"); // "type" or "form"
  const [accountType, setAccountType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSelectType = (type) => {
    setAccountType(type);
    setError("");
    setStep("form");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await registerUser({ name, email, password });
      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const options = [
    {
      id: "personal",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center relative">
          <div className="w-4 h-4 rounded-full bg-blue-600 absolute top-1 left-4"></div>
          <div className="w-7 h-5 rounded-t-lg bg-black absolute bottom-1 left-2.5 flex items-center justify-center">
            <span className="text-white text-[10px] pb-1">✓</span>
          </div>
        </div>
      ),
      title: "Personal",
      desc: "Trade crypto as an individual.",
    },
    {
      id: "business",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center relative">
          <div className="w-3 h-3 rounded-full bg-gray-300 absolute top-2 left-2"></div>
          <div className="w-5 h-4 rounded-t-md bg-gray-300 absolute bottom-2 left-1"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600 absolute top-2 right-2"></div>
          <div className="w-5 h-4 rounded-t-md bg-blue-600 absolute bottom-2 right-1"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-400 border-[3px] border-blue-900 absolute top-3 left-3 flex items-center justify-center z-10"></div>
        </div>
      ),
      title: "Business",
      desc: "Manage teams and portfolios, accept crypto payments, access APIs, and more.",
    },
    {
      id: "developer",
      icon: (
        <div className="w-12 h-12 flex flex-col items-center justify-center gap-[2px]">
          <div className="w-5 h-2 bg-[#0052FF] skew-x-12 shrink-0"></div>
          <div className="w-6 h-2 bg-black skew-x-12 shrink-0"></div>
          <div className="w-7 h-2 bg-[#0052FF] skew-x-12 shrink-0"></div>
        </div>
      ),
      title: "Developer",
      desc: "Build onchain using developer tooling.",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center relative">
      {/* Top Left Logo */}
      <div className="fixed top-8 left-8">
        <Link to="/">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1652F0" />
            <path
              d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C25.822 32 30.704 27.969 31.747 22.5H25.4C24.478 25.107 22.444 27 20 27C16.686 27 14 23.866 14 20C14 16.134 16.686 13 20 13C22.444 13 24.478 14.893 25.4 17.5H31.747C30.704 12.031 25.822 8 20 8Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      <div className="w-full max-w-[460px] mt-24 px-6 pb-12 flex-1 flex flex-col justify-center">
        {step === "type" ? (
          <>
            <h2 className="text-[40px] font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              What kind of account are you creating?
            </h2>

            <div className="flex flex-col gap-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelectType(option.id)}
                  className={`flex items-start gap-5 border rounded-[14px] p-6 text-left hover:shadow-sm hover:border-gray-300 transition-all ${
                    accountType === option.id
                      ? "border-blue-600 ring-1 ring-blue-600"
                      : "border-gray-200"
                  }`}
                >
                  <div className="shrink-0 pt-0.5">{option.icon}</div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{option.title}</p>
                    <p className="text-gray-500 text-[15px] leading-snug">
                      {option.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-gray-900 mt-8 font-bold text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </>
        ) : (
          <>
            <button
              onClick={() => setStep("type")}
              className="text-blue-600 hover:underline text-sm mb-6 self-start"
            >
              ← Back
            </button>

            <h2 className="text-[32px] font-bold text-gray-900 mb-2 leading-tight tracking-tight">
              Create your account
            </h2>
            <p className="text-gray-500 mb-2 text-sm">
              {accountType === "personal"
                ? "Set up your personal trading account"
                : accountType === "business"
                ? "Set up your business account"
                : "Set up your developer account"}
            </p>
            <p className="text-red-600 font-medium mb-8 text-sm">Demo app – do not use your real password</p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !name || !email || !password}
                className={`w-full py-4 rounded-full font-bold text-[17px] transition-all mt-2
                  ${
                    name && email && password && !isLoading
                      ? "bg-[#0052FF] text-white hover:bg-[#0045D8] cursor-pointer"
                      : "bg-[#83AAF7] text-white cursor-not-allowed"
                  }
                `}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="text-center text-gray-500 mt-8 text-[13px] leading-relaxed max-w-sm mx-auto">
              By creating an account, you agree to our{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default SignUp;
