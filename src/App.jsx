import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import WarningBanner from "./components/layout/WarningBanner";
import FooterDisclaimer from "./components/layout/FooterDisclaimer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      <WarningBanner />
      {!isAuthPage && <Navbar />}
      <div className="flex flex-1">
        {!isAuthPage && <Sidebar />}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/asset/:id" element={<AssetDetail />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          {!isAuthPage && (
            <>
              <Footer />
              <FooterDisclaimer />
            </>
          )}
          {isAuthPage && <FooterDisclaimer />}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
