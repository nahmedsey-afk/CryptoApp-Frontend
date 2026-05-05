import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";

// Import icons for social sign-in buttons
import passkeyIcon from "../assets/images/passkey .png";
import googleIcon from "../assets/images/sign in with google.png";
import appleIcon from "../assets/images/sign in with apple.png";

function SignIn() {
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

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await loginUser({ email, password });
      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

      <div className="w-full max-w-[440px] mt-24 px-6 flex-1 flex flex-col justify-center pb-20">
        <h2 className="text-[40px] font-bold text-gray-900 mb-2 text-center tracking-tight">
          Sign in to Coinbase
        </h2>
        <p className="text-center text-red-600 font-medium mb-8">Demo app – do not use your real password</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:border-gray-400 transition-colors w-full bg-transparent"
            />
          </div>
          <button
            onClick={handleSignIn}
            disabled={isLoading || (!email || !password)}
            className={`w-full py-4 rounded-full font-bold text-[17px] transition-all
              ${email && password && !isLoading
                ? "bg-[#0052FF] text-white hover:bg-[#0045D8] cursor-pointer"
                : "bg-[#83AAF7] text-white cursor-not-allowed"
              }
            `}
          >
            {isLoading ? "Signing in..." : "Continue"}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-500 text-xs font-semibold">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4">
          <button className="w-full flex items-center justify-center relative border border-gray-200 bg-white hover:bg-gray-50 py-4 rounded-full font-bold text-gray-900 transition-colors">
            <img src={passkeyIcon} alt="Passkey" className="absolute left-6 w-5 h-5 object-contain" />
            Sign in with Passkey
          </button>
          <button className="w-full flex items-center justify-center relative border border-gray-200 bg-white hover:bg-gray-50 py-4 rounded-full font-bold text-gray-900 transition-colors">
            <img src={googleIcon} alt="Google" className="absolute left-6 w-5 h-5 object-contain" />
            Sign in with Google
          </button>
          <button className="w-full flex items-center justify-center relative border border-gray-200 bg-white hover:bg-gray-50 py-4 rounded-full font-bold text-gray-900 transition-colors">
            <img src={appleIcon} alt="Apple" className="absolute left-6 w-5 h-5 object-contain" />
            Sign in with Apple
          </button>
        </div>

        <p className="text-center text-gray-900 mt-8 font-bold text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <p className="text-center text-gray-500 mt-8 text-[13px] leading-relaxed max-w-sm mx-auto">
          Not your device? Use a private window. See our{" "}
          <a href="#" className="underline">Privacy Policy</a>{" "}
          for more info.
        </p>
      </div>
    </main>
  );
}

export default SignIn;
