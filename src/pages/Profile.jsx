import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700 font-semibold text-sm border border-red-200 hover:border-red-400 px-5 py-2.5 rounded-full transition-all"
        >
          Sign out
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-[#0052FF] to-[#1652F0] relative">
          <div className="absolute -bottom-10 left-8">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold text-[#0052FF]">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pt-14 pb-8 px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
          <p className="text-gray-500 text-sm mb-6">{user.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Full Name
              </p>
              <p className="font-semibold text-gray-900">{user.name}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Email Address
              </p>
              <p className="font-semibold text-gray-900">{user.email}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Account ID
              </p>
              <p className="font-semibold text-gray-900 text-sm font-mono">
                {user._id}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Member Since
              </p>
              <p className="font-semibold text-gray-900">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/explore"
          className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all group"
        >
          <div className="text-2xl mb-2">📊</div>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0052FF] transition-colors">
            Explore Crypto
          </h3>
          <p className="text-gray-500 text-sm">
            Browse all available cryptocurrencies
          </p>
        </Link>
        <Link
          to="/learn"
          className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all group"
        >
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0052FF] transition-colors">
            Learn
          </h3>
          <p className="text-gray-500 text-sm">
            Crypto tips, guides, and tutorials
          </p>
        </Link>
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all group cursor-pointer">
          <div className="text-2xl mb-2">⚙️</div>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0052FF] transition-colors">
            Settings
          </h3>
          <p className="text-gray-500 text-sm">
            Manage your account preferences
          </p>
        </div>
      </div>
    </main>
  );
}

export default Profile;
