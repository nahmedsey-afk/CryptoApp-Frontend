import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import searchIcon from "../../assets/icons/search icon.png";
import webIcon from "../../assets/icons/web icon.png";

import buyAndSellIcon from "../../assets/icons/buy and sell.png";
import advancedIcon from "../../assets/icons/advanced.png";
import baseAppIcon from "../../assets/icons/base app.png";
import earnIcon from "../../assets/icons/earn.png";
import coinbaseOneIcon from "../../assets/icons/coinbase one.png";
import coinbaseWealthIcon from "../../assets/icons/coinbase wealth.png";
import privateClientIcon from "../../assets/icons/private client.png";
import creditCardIcon from "../../assets/icons/credit card.png";
import onchainIcon from "../../assets/icons/onechain.png";
import debitCardIcon from "../../assets/icons/debit card.png";
import learnIcon from "../../assets/icons/learn.png";

import businessIcon from "../../assets/icons/business.png";
import paymentIcon from "../../assets/icons/payment.png";
import assetListingsIcon from "../../assets/icons/assets listings.png";
import tokenManagerIcon from "../../assets/icons/token manager.png";
import commerceProtocolImg from "../../assets/icons/commerce protocol.png";

import tradingFinanceIcon from "../../assets/icons/trading and finance.png";
import custodyIcon from "../../assets/icons/custody.png";
import stakingIcon from "../../assets/icons/staking.png";
import onchainWalletIcon from "../../assets/icons/onchain wallet.png";
import exchangeIcon from "../../assets/icons/exchange.png";
import internationalExchangeIcon from "../../assets/icons/international exchange.png";
import derivativeExchangeIcon from "../../assets/icons/derrivative exchange.png";
import verifiedPoolsIcon from "../../assets/icons/verified pools.png";

import paymentsIcon from "../../assets/icons/payments.png";
import tradingIcon from "../../assets/icons/trading.png";
import walletsIcon from "../../assets/icons/wallets.png";
import stablecoinsIcon from "../../assets/icons/stablecoins.png";
import banksBrokeragesIcon from "../../assets/icons/banks and brokerages.png";
import startupsIcon from "../../assets/icons/startups.png";

import aboutIcon from "../../assets/icons/about.png";
import careersIcon from "../../assets/icons/careers.png";
import affiliatesIcon from "../../assets/icons/affiliates.png";
import supportIcon from "../../assets/icons/support.png";
import blogIcon from "../../assets/icons/blog.png";
import securityIcon from "../../assets/icons/security.png";

import cryptoMovesImg from "../../assets/icons/crpto moves.png";
import assetsStatsImg from "../../assets/images/assets-stats.png";
import baseAppImg from "../../assets/images/base-app.png";
import worldClassImg from "../../assets/images/world class crypto infrastructure.png";
import systemUpdateImg from "../../assets/images/system update.png";

// Import Crypto Icons for Search Mock Data
import bitcoinIcon from "../../assets/icons/Bitcoin.png";
import ethereumIcon from "../../assets/icons/Ethereum.png";
import dogecoinIcon from "../../assets/icons/Dogecoin.png";
import solanaIcon from "../../assets/icons/Solana.png";
import polkadotIcon from "../../assets/icons/Polkadot.png";
import litecoinIcon from "../../assets/icons/Litecoin.png";
import tetherIcon from "../../assets/icons/tether.png";
import cardanoIcon from "../../assets/icons/Cardano.png";
import chainlinkIcon from "../../assets/icons/Chainlink.png";
import appleIcon from "../../assets/icons/icon under stocks.png";

const topCryptoSearchData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    icon: bitcoinIcon,
    vol: "GHS 50.8B vol",
    mcap: "GHS 1.4T mcap",
    price: "GHS 68,393.53",
    change: "+2.57%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    icon: ethereumIcon,
    vol: "GHS 24.1B vol",
    mcap: "GHS 243.6B mcap",
    price: "GHS 2,013.35",
    change: "+4.53%",
  },
  {
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    icon: tetherIcon,
    vol: "GHS 92.5B vol",
    mcap: "GHS 183.9B mcap",
    price: "GHS 1.00",
    change: "+0.01%",
  },
  {
    name: "Solana",
    symbol: "SOL",
    rank: 4,
    icon: solanaIcon,
    vol: "GHS 35.2B vol",
    mcap: "GHS 65.1B mcap",
    price: "GHS 148.55",
    change: "+8.21%",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    rank: 8,
    icon: dogecoinIcon,
    vol: "GHS 12.4B vol",
    mcap: "GHS 24.5B mcap",
    price: "GHS 0.16",
    change: "-1.50%",
  }
];

const topStocksSearchData = [
  {
    name: "NVIDIA",
    symbol: "NVDA",
    iconType: "pie",
    vol: "GHS 118.1M vol",
    mcap: "GHS 4.4T mcap",
    price: "GHS 179.33",
    change: "+2.47%",
  },
  {
    name: "Apple",
    symbol: "AAPL",
    iconType: "apple", // SVG fallback in code
    icon: appleIcon,
    vol: "GHS 20.6M vol",
    mcap: "GHS 3.4T mcap",
    price: "GHS 257.43",
    change: "-1.12%",
  }
];

const topPredictionsSearchData = [
  {
    name: "THE PLAYERS Championship Winner?",
    desc: "Scottie Scheffler",
    iconType: "golf",
    prob: "17%",
    probChange: "-4",
  },
  {
    name: "Men's College Basketball Champion",
    desc: "Duke",
    iconType: "basketball",
    prob: "24%",
    probChange: "+2",
  },
  {
    name: "Masters Tournament Champion",
    desc: "Scottie Scheffler",
    iconType: "masters",
    prob: "22%",
    probChange: "--",
  }
];

const topPerpetualsSearchData = [
  {
    name: "BTC PERP",
    desc: "CDE",
    icon: bitcoinIcon,
    vol: "GHS 810.6M vol",
    fund: "0.0004% fund",
    price: "GHS 68,435.00",
    change: "+2.48%",
  },
  {
    name: "ETH PERP",
    desc: "CDE",
    icon: ethereumIcon,
    vol: "GHS 172.6M vol",
    fund: "-0.0004% fund",
    price: "GHS 2,013.50",
    change: "+4.35%",
  },
  {
    name: "SOL PERP",
    desc: "CDE",
    icon: solanaIcon,
    vol: "GHS 40M vol",
    fund: "0.0006% fund",
    price: "GHS 85.27",
    change: "+4.55%",
  }
];

const topFuturesSearchData = [
  {
    name: "SLVR Futures",
    desc: "Apr 2026 • CDE",
    iconType: "silver",
    vol: "GHS 458.4M vol",
    oi: "GHS 13.3K oi",
    price: "GHS 86.20",
    change: "+1.72%",
  },
  {
    name: "GLD Futures",
    desc: "Mar 2026 • CDE",
    iconType: "gold",
    vol: "GHS 258.9M vol",
    oi: "GHS 9.2K oi",
    price: "GHS 5,135.30",
    change: "+0.38%",
  }
];

const individualItems = [
  {
    title: "Buy and sell",
    desc: "Buy, sell, and use crypto",
    icon: <img src={buyAndSellIcon} alt="Buy and sell" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Advanced",
    desc: "Professional-grade trading tools",
    icon: <img src={advancedIcon} alt="Advanced" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Base App",
    desc: "Post, earn, trade, and chat, all in one place",
    icon: <img src={baseAppIcon} alt="Base App" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Earn",
    desc: "Stake your crypto and earn rewards",
    icon: <img src={earnIcon} alt="Earn" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Coinbase One",
    desc: "Get zero trading fees and more",
    icon: <img src={coinbaseOneIcon} alt="Coinbase One" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Coinbase Wealth",
    desc: "Institutional-grade services for UHNW",
    icon: <img src={coinbaseWealthIcon} alt="Coinbase Wealth" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Private Client",
    desc: "For trusts, family offices, UHNWIs",
    icon: <img src={privateClientIcon} alt="Private Client" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Credit Card",
    desc: "Earn up to 4% bitcoin back",
    icon: <img src={creditCardIcon} alt="Credit Card" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Onchain",
    desc: "Dive into the world of onchain apps",
    icon: <img src={onchainIcon} alt="Onchain" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Debit Card",
    desc: "Spend crypto, get crypto back",
    icon: <img src={debitCardIcon} alt="Debit Card" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Learn",
    desc: "Crypto tips and guides",
    icon: <img src={learnIcon} alt="Learn" className="w-8 h-8 object-contain" />,
  }
];

const businessItems = [
  {
    title: "Business",
    desc: "Crypto trading and payments for startups and SMBs",
    icon: <img src={businessIcon} alt="Business" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Payments",
    desc: "The stablecoin payments stack for commerce platforms",
    icon: <img src={paymentIcon} alt="Payments" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Asset Listings",
    desc: "List your asset on Coinbase",
    icon: <img src={assetListingsIcon} alt="Asset Listings" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Token Manager",
    desc: "The platform for token distributions, vesting, and lockups",
    icon: <img src={tokenManagerIcon} alt="Token Manager" className="w-8 h-8 object-contain" />,
  }
];

const institutionPrimeItems = [
  {
    title: "Trading and Financing",
    desc: "Professional prime brokerage services",
    icon: <img src={tradingFinanceIcon} alt="Trading and Financing" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Custody",
    desc: "Securely store all your digital assets",
    icon: <img src={custodyIcon} alt="Custody" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Staking",
    desc: "Explore staking across our products",
    icon: <img src={stakingIcon} alt="Staking" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Onchain Wallet",
    desc: "Institutional-grade wallet to get onchain",
    icon: <img src={onchainWalletIcon} alt="Onchain Wallet" className="w-8 h-8 object-contain" />,
  }
];

const institutionMarketsItems = [
  {
    title: "Exchange",
    desc: "Spot markets for high-frequency trading",
    icon: <img src={exchangeIcon} alt="Exchange" className="w-8 h-8 object-contain" />,
  },
  {
    title: "International Exchange",
    desc: "Access perpetual futures markets",
    icon: <img src={internationalExchangeIcon} alt="International Exchange" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Derivatives Exchange",
    desc: "Trade an accessible futures market",
    icon: <img src={derivativeExchangeIcon} alt="Derivatives Exchange" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Verified Pools",
    desc: "Transparent, verified liquidity pools",
    icon: <img src={verifiedPoolsIcon} alt="Verified Pools" className="w-8 h-8 object-contain" />,
  }
];

const developerPlatformItems = [
  {
    title: "Payments",
    desc: "Fast and global stablecoin payments with a single integration",
    icon: <img src={paymentsIcon} alt="Payments" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Trading",
    desc: "Launch crypto trading and custody for your users",
    icon: <img src={tradingIcon} alt="Trading" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Wallets",
    desc: "Deploy customizable and scalable wallets for your business",
    icon: <img src={walletsIcon} alt="Wallets" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Stablecoins",
    desc: "Access USDC and Coinbase Custom Stablecoins",
    icon: <img src={stablecoinsIcon} alt="Stablecoins" className="w-8 h-8 object-contain" />,
  }
];

const developerSolutionsItems = [
  {
    title: "Banks & Brokerages",
    desc: "Secure, regulated offerings for retail, private banking, & institutional clients",
    icon: <img src={banksBrokeragesIcon} alt="Banks & Brokerages" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Payment Firms",
    desc: "Near-instant, low-cost, global payment rails for modern providers",
    icon: <img src={paymentIcon} alt="Payment Firms" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Startups",
    desc: "Launch your business with the world's leader in crypto",
    icon: <img src={startupsIcon} alt="Startups" className="w-8 h-8 object-contain" />,
  }
];

const companyItems = [
  {
    title: "About",
    desc: "Powering the crypto economy",
    icon: <img src={aboutIcon} alt="About" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Careers",
    desc: "Work with us",
    icon: <img src={careersIcon} alt="Careers" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Affiliates",
    desc: "Help introduce the world to crypto",
    icon: <img src={affiliatesIcon} alt="Affiliates" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Support",
    desc: "Find answers to your questions",
    icon: <img src={supportIcon} alt="Support" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Blog",
    desc: "Read the latest from Coinbase",
    icon: <img src={blogIcon} alt="Blog" className="w-8 h-8 object-contain" />,
  },
  {
    title: "Security",
    desc: "The most trusted & secure",
    icon: <img src={securityIcon} alt="Security" className="w-8 h-8 object-contain" />,
  }
];

function Navbar() {
  const { user, logout } = useAuth();
  const navNavigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndividualsHovered, setIsIndividualsHovered] = useState(false);
  const [isBusinessesHovered, setIsBusinessesHovered] = useState(false);
  const [isInstitutionsHovered, setIsInstitutionsHovered] = useState(false);
  const [isDevelopersHovered, setIsDevelopersHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLanguageActive, setIsLanguageActive] = useState(false);

  const timeoutRef = useRef(null);

  const closeAllDropDowns = () => {
    setIsIndividualsHovered(false);
    setIsBusinessesHovered(false);
    setIsInstitutionsHovered(false);
    setIsDevelopersHovered(false);
    setIsCompanyHovered(false);
    setIsLanguageActive(false);
  }

  const handleMouseEnterIndividuals = () => {
    clearTimeout(timeoutRef.current);
    setIsIndividualsHovered(true);
    setIsBusinessesHovered(false);
    setIsInstitutionsHovered(false);
    setIsDevelopersHovered(false);
    setIsCompanyHovered(false);
  };

  const handleMouseLeaveIndividuals = () => {
    timeoutRef.current = setTimeout(() => setIsIndividualsHovered(false), 200);
  };

  const handleMouseEnterBusinesses = () => {
    clearTimeout(timeoutRef.current);
    closeAllDropDowns();
    if (isSearchActive) return;
    setIsBusinessesHovered(true);
  };

  const handleMouseLeaveBusinesses = () => {
    timeoutRef.current = setTimeout(() => setIsBusinessesHovered(false), 200);
  };

  const handleMouseEnterInstitutions = () => {
    clearTimeout(timeoutRef.current);
    closeAllDropDowns();
    if (isSearchActive) return;
    setIsInstitutionsHovered(true);
  };

  const handleMouseLeaveInstitutions = () => {
    timeoutRef.current = setTimeout(() => setIsInstitutionsHovered(false), 200);
  };

  const handleMouseEnterDevelopers = () => {
    clearTimeout(timeoutRef.current);
    closeAllDropDowns();
    if (isSearchActive) return;
    setIsDevelopersHovered(true);
  };

  const handleMouseLeaveDevelopers = () => {
    timeoutRef.current = setTimeout(() => setIsDevelopersHovered(false), 200);
  };

  const handleMouseEnterCompany = () => {
    clearTimeout(timeoutRef.current);
    closeAllDropDowns();
    if (isSearchActive) return;
    setIsCompanyHovered(true);
  };

  const handleMouseLeaveCompany = () => {
    timeoutRef.current = setTimeout(() => setIsCompanyHovered(false), 200);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-8 h-full">
        <Link to="/" className="flex items-center h-full">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1652F0" />
            <path
              d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C25.822 32 30.704 27.969 31.747 22.5H25.4C24.478 25.107 22.444 27 20 27C16.686 27 14 23.866 14 20C14 16.134 16.686 13 20 13C22.444 13 24.478 14.893 25.4 17.5H31.747C30.704 12.031 25.822 8 20 8Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 h-full">
          <Link
            to="/explore"
            className="text-gray-700 hover:text-black font-medium text-sm transition-colors py-6"
          >
            Cryptocurrencies
          </Link>
          
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterIndividuals}
            onMouseLeave={handleMouseLeaveIndividuals}
          >
            <span className={`font-medium text-sm cursor-pointer transition-colors py-6 ${isIndividualsHovered ? "text-black" : "text-gray-700 hover:text-black"}`}>
              Individuals
            </span>
          </div>
          
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterBusinesses}
            onMouseLeave={handleMouseLeaveBusinesses}
          >
            <span className={`font-medium text-sm cursor-pointer transition-colors py-6 ${isBusinessesHovered ? "text-black" : "text-gray-700 hover:text-black"}`}>
              Businesses
            </span>
          </div>
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterInstitutions}
            onMouseLeave={handleMouseLeaveInstitutions}
          >
            <span className={`font-medium text-sm cursor-pointer transition-colors py-6 ${isInstitutionsHovered ? "text-black" : "text-gray-700 hover:text-black"}`}>
              Institutions
            </span>
          </div>
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterDevelopers}
            onMouseLeave={handleMouseLeaveDevelopers}
          >
            <span className={`font-medium text-sm cursor-pointer transition-colors py-1.5 px-3 rounded-full ${isDevelopersHovered ? "text-black bg-[#F3F5F7]" : "text-gray-700 hover:text-black"}`}>
              Developers
            </span>
          </div>
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeaveCompany}
          >
            <span className={`font-medium text-sm cursor-pointer transition-colors py-1.5 px-3 rounded-full ${isCompanyHovered ? "text-black bg-[#F3F5F7]" : "text-gray-700 hover:text-black"}`}>
              Company
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={`flex items-center gap-3 ${isSearchActive ? 'flex-1 justify-end ml-4' : ''}`}>
        <div className={`hidden md:flex items-center gap-2 ${isSearchActive ? 'flex-1 relative max-w-2xl' : ''}`}>
          {isSearchActive ? (
            <div className="flex-1 relative flex items-center">
               <div className="absolute left-3.5 z-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
               <input 
                  type="text" 
                  placeholder="Search" 
                  autoFocus
                  className="w-full h-11 bg-[#F3F5F7] hover:bg-gray-200 border-2 border-[#0052FF] rounded-full pl-11 pr-4 text-gray-900 text-base outline-none transition-colors"
                  onBlur={(e) => {
                     // small timeout to prevent blur killing clicks on dropdown items
                     setTimeout(() => setIsSearchActive(false), 200);
                  }}
               />
               
               {/* Search Active Dropdown Panel */}
               <div className="absolute top-[52px] right-0 w-[600px] max-w-[100vw] bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col z-50">
                   {/* Pills Category Header */}
                   <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                      {['Top', 'Crypto', 'Stocks', 'Predictions', 'Perpetuals', 'Futures'].map((pill, idx) => (
                        <button 
                          key={pill} 
                          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${idx === 0 ? 'bg-[#1D1E20] text-white hover:bg-black' : 'bg-[#F3F5F7] text-gray-900 hover:bg-gray-200'}`}
                        >
                          {pill}
                        </button>
                      ))}
                   </div>
                   
                   {/* Scrollable Data Lists */}
                   <div className="overflow-y-auto max-h-[480px] p-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                       
                       {/* Crypto List Section */}
                       <div className="mb-4">
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wider px-4 py-3">CRYPTO</h4>
                          <div className="flex flex-col gap-0.5">
                             {topCryptoSearchData.map((coin, i) => (
                               <div key={coin.symbol} className="flex items-center px-4 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                                     {coin.icon ? (
                                       <img src={coin.icon} alt={coin.name} className="w-full h-full object-cover" />
                                     ) : (
                                       <div className="w-full h-full bg-[#26A17B] flex items-center justify-center">
                                         <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#26A17B"/><path d="M17.4777 14.1201V8.65344H23.0062V4.89746H8.97461V8.65344H14.5317V14.1201C11.3323 14.3312 8.97461 15.3676 8.97461 16.5986C8.97461 17.8296 11.341 18.8659 14.5317 19.077V26.2625H17.4777V19.077C20.6683 18.8659 23.0347 17.8296 23.0347 16.5986C23.026 15.3676 20.6683 14.3312 17.4777 14.1201ZM16.0094 17.5615C12.8711 17.5615 10.3129 17.1354 10.3129 16.5986C10.3129 16.0354 12.8711 15.6267 16.0094 15.6267C19.1477 15.6267 21.7145 16.0441 21.7145 16.5986C21.7145 17.1441 19.1477 17.5615 16.0094 17.5615Z" fill="white"/></svg>
                                       </div>
                                     )}
                                  </div>
                                  <div className="flex flex-col ml-3 min-w-[140px]">
                                     <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-900 text-[15px]">{coin.name}</span>
                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">#{coin.rank}</span>
                                     </div>
                                     <span className="text-[13px] text-gray-500 uppercase">{coin.symbol}</span>
                                  </div>
                                  
                                  <div className="flex flex-col mx-auto items-start">
                                     <span className="text-[14px] text-gray-900">{coin.vol}</span>
                                     <span className="text-[14px] text-gray-500">{coin.mcap}</span>
                                  </div>
                                  
                                  <div className="flex flex-col items-end min-w-[100px]">
                                     <span className="text-[14px] text-gray-900">{coin.price}</span>
                                     <span className="text-[14px] font-medium text-[#098551] flex items-center gap-0.5">
                                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                       </svg>
                                       {coin.change.replace('+', '')}
                                     </span>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       {/* Stocks List Section */}
                       <div>
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wider px-4 py-3">STOCKS</h4>
                          <div className="flex flex-col gap-0.5">
                             {topStocksSearchData.map((stock, i) => (
                               <div key={stock.symbol} className="flex items-center px-4 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                                     {stock.icon ? (
                                        <img src={stock.icon} alt={stock.name} className="w-full h-full object-cover" />
                                     ) : stock.iconType === 'pie' ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3V12H21Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M16 8L20.2426 3.75736" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                     ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12 2L12 12M12 12V22M12 12H22M12 12H2" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <circle cx="12" cy="12" r="5" stroke="#0052FF" strokeWidth="2"/>
                                        </svg>
                                     )}
                                  </div>
                                  <div className="flex flex-col ml-3 min-w-[140px]">
                                     <span className="font-medium text-gray-900 text-[15px]">{stock.name}</span>
                                     <span className="text-[13px] text-gray-500 uppercase">{stock.symbol}</span>
                                  </div>
                                  
                                  <div className="flex flex-col mx-auto items-start">
                                     <span className="text-[14px] text-gray-900">{stock.vol}</span>
                                     <span className="text-[14px] text-gray-500">{stock.mcap}</span>
                                  </div>
                                  
                                  <div className="flex flex-col items-end min-w-[100px]">
                                     <span className="text-[14px] text-gray-900">{stock.price}</span>
                                     <span className={`text-[14px] font-medium flex items-center gap-0.5 ${stock.change.includes('+') ? 'text-[#098551]' : 'text-gray-500'}`}>
                                       {stock.change.includes('+') && (
                                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                         </svg>
                                       )}
                                       {stock.change.replace('+', '')}
                                     </span>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       {/* Predictions List Section */}
                       <div className="mb-4">
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wider px-4 py-3">PREDICTIONS</h4>
                          <div className="flex flex-col gap-0.5">
                             {topPredictionsSearchData.map((prediction, i) => (
                               <div key={i} className="flex items-center px-4 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-gray-200 bg-gray-50">
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 21V19C4 17.8954 4.89543 17 6 17H18C19.1046 17 20 17.8954 20 19V21M12 17V3M12 3L6 8H18L12 3Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div className="flex flex-col ml-3 flex-1">
                                     <span className="font-medium text-gray-900 text-[15px]">{prediction.name}</span>
                                     <span className="text-[14px] text-gray-500">{prediction.desc}</span>
                                  </div>
                                  
                                  <div className="flex flex-col items-end min-w-[60px]">
                                     <span className="text-[14px] text-gray-900">{prediction.prob}</span>
                                     <span className={`text-[14px] font-medium flex items-center gap-0.5 ${prediction.probChange === '--' ? 'text-gray-500' : prediction.probChange.includes('+') ? 'text-[#098551]' : 'text-[#CF2030]'}`}>
                                       {prediction.probChange.includes('+') && (
                                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                         </svg>
                                       )}
                                       {prediction.probChange.includes('-') && prediction.probChange !== '--' && (
                                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                            <path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                         </svg>
                                       )}
                                       {prediction.probChange.replace('+', '').replace('-', '')}
                                     </span>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       {/* Perpetuals List Section */}
                       <div className="mb-4 border-t border-gray-100 pt-2 mt-4">
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wider px-4 py-3">PERPETUALS</h4>
                          <div className="flex flex-col gap-0.5">
                             {topPerpetualsSearchData.map((perp, i) => (
                               <div key={perp.name} className="flex items-center px-4 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                                      <img src={perp.icon} alt={perp.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex flex-col ml-3 min-w-[140px]">
                                     <span className="font-medium text-gray-900 text-[15px]">{perp.name}</span>
                                     <span className="text-[13px] text-gray-500 uppercase">{perp.desc}</span>
                                  </div>
                                  
                                  <div className="flex flex-col mx-auto items-start">
                                     <span className="text-[14px] text-gray-900">{perp.vol}</span>
                                     <span className="text-[14px] text-gray-500">{perp.fund}</span>
                                  </div>
                                  
                                  <div className="flex flex-col items-end min-w-[100px]">
                                     <span className="text-[14px] text-gray-900">{perp.price}</span>
                                     <span className={`text-[14px] font-medium flex items-center gap-0.5 ${perp.change.includes('+') ? 'text-[#098551]' : 'text-gray-500'}`}>
                                       {perp.change.includes('+') && (
                                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                         </svg>
                                       )}
                                       {perp.change.replace('+', '')}
                                     </span>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       {/* Futures List Section */}
                       <div className="mb-2">
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wider px-4 py-3">FUTURES</h4>
                          <div className="flex flex-col gap-0.5">
                             {topFuturesSearchData.map((future, i) => (
                               <div key={future.name} className="flex items-center px-4 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-[#E2AD14]">
                                      {future.iconType === 'silver' ? (
                                        <div className="w-full h-full bg-[#9DA8B6] flex items-center justify-center">
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" fill="white"/></svg>
                                        </div>
                                      ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" fill="white"/></svg>
                                        </div>
                                      )}
                                  </div>
                                  <div className="flex flex-col ml-3 min-w-[140px]">
                                     <span className="font-medium text-gray-900 text-[15px]">{future.name}</span>
                                     <span className="text-[13px] text-gray-500">{future.desc}</span>
                                  </div>
                                  
                                  <div className="flex flex-col mx-auto items-start">
                                     <span className="text-[14px] text-gray-900">{future.vol}</span>
                                     <span className="text-[14px] text-gray-500">{future.oi}</span>
                                  </div>
                                  
                                  <div className="flex flex-col items-end min-w-[100px]">
                                     <span className="text-[14px] text-gray-900">{future.price}</span>
                                     <span className={`text-[14px] font-medium flex items-center gap-0.5 ${future.change.includes('+') ? 'text-[#098551]' : 'text-gray-500'}`}>
                                       {future.change.includes('+') && (
                                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                         </svg>
                                       )}
                                       {future.change.replace('+', '')}
                                     </span>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                   </div>
               </div>
            </div>
          ) : (
            <button 
              className="w-11 h-11 shrink-0 flex items-center justify-center bg-[#F3F5F7] transition-colors hover:bg-gray-200 rounded-full"
              onClick={() => {
                closeAllDropDowns();
                setIsSearchActive(true);
              }}
            >
              <img src={searchIcon} alt="Search" className="w-[24px] h-[24px] object-contain opacity-90" />
            </button>
          )}
          
          {!isSearchActive && (
            <div className="relative">
              <button 
                className={`w-11 h-11 shrink-0 flex items-center justify-center transition-colors rounded-full ${isLanguageActive ? 'bg-gray-200' : 'bg-[#F3F5F7] hover:bg-gray-200'}`}
                onClick={() => {
                  closeAllDropDowns();
                  setIsLanguageActive(!isLanguageActive);
                }}
              >
                <img src={webIcon} alt="Web" className="w-[24px] h-[24px] object-contain opacity-90" />
              </button>
              
              {/* Language and Region Active Panel */}
              {isLanguageActive && (
                 <div className="absolute top-[52px] right-0 w-[360px] max-w-[100vw] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col z-50 overflow-hidden">
                    <div className="p-5 pb-3">
                       <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">Language and region</h3>
                       <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#5C6068" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 21L16.65 16.65" stroke="#5C6068" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                          </div>
                          <input 
                            type="text" 
                            placeholder="Search" 
                            className="w-full bg-[#F3F5F7] hover:bg-gray-200 transition-colors h-12 rounded-full pl-12 pr-4 text-base text-gray-900 outline-none placeholder-gray-500 font-normal" 
                          />
                       </div>
                    </div>
                    
                    <div className="overflow-y-auto max-h-[380px] pb-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                       {[
                         {lang: 'English', region: 'Global', active: true},
                         {lang: 'Español', region: 'United States'},
                         {lang: 'English', region: 'United States'},
                         {lang: 'Deutsch', region: 'Germany'},
                         {lang: 'Français', region: 'Canada'},
                         {lang: 'Español', region: 'Spain'},
                         {lang: 'Italiano', region: 'Italy'},
                         {lang: '中文', region: 'Singapore'}
                       ].map((locale, i) => (
                         <div key={i} className="px-5 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
                            <div className="flex flex-col">
                               <span className="font-semibold text-[17px] text-gray-900 leading-snug tracking-tight group-hover:text-black">{locale.lang}</span>
                               {locale.region && <span className="text-[15px] text-gray-500 leading-snug tracking-tight group-hover:text-gray-700">{locale.region}</span>}
                            </div>
                            {locale.active && (
                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20 6L9 17L4 12" stroke="#098551" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               </svg>
                            )}
                         </div>
                       ))}
                    </div>
                 </div>
              )}
            </div>
          )}
        </div>
        {user ? (
          <>
            <Link
              to="/profile"
              className="hidden sm:flex items-center gap-2 text-black font-medium px-5 py-2.5 rounded-full border border-gray-300 hover:border-gray-500 text-[16px] whitespace-nowrap transition-all"
            >
              <span className="w-6 h-6 rounded-full bg-[#0052FF] text-white flex items-center justify-center text-xs font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </span>
              Profile
            </Link>
            <button
              onClick={async () => { await logout(); navNavigate("/signin"); }}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-bold text-[16px] whitespace-nowrap hover:bg-black transition-colors"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="hidden sm:block text-black font-medium px-5 py-2.5 rounded-full border border-gray-300 hover:border-gray-500 text-[16px] whitespace-nowrap transition-all"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-[#1652F0] text-white px-5 py-2.5 rounded-full font-bold text-[16px] whitespace-nowrap hover:bg-[#0045D8] transition-colors"
            >
              Sign up
            </Link>
          </>
        )}
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-black p-2 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden flex flex-col py-4 px-6 gap-4">
          <Link
            to="/explore"
            className="text-gray-700 hover:text-black font-medium text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Cryptocurrencies
          </Link>
          <span className="text-gray-700 font-medium text-base cursor-pointer hover:text-black">
            Individuals
          </span>
          <span className="text-gray-700 font-medium text-base cursor-pointer hover:text-black">
            Businesses
          </span>
          <span className="text-gray-700 font-medium text-base cursor-pointer hover:text-black">
            Institutions
          </span>
          <span className="text-gray-700 font-medium text-base cursor-pointer hover:text-black">
            Developers
          </span>
          <span className="text-gray-700 font-medium text-base cursor-pointer hover:text-black">
            Company
          </span>
          <hr className="my-2 border-gray-100" />
          <Link
            to="/signin"
            className="text-center text-black font-medium px-4 py-3 rounded-full border border-gray-300 hover:border-gray-500 text-base transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </Link>
        </div>
      )}

      {/* Mega Menu Dropdown for Individuals */}
      {isIndividualsHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl hidden md:block"
          onMouseEnter={handleMouseEnterIndividuals}
          onMouseLeave={handleMouseLeaveIndividuals}
        >
          <div className="w-full overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-8 flex">
              {/* Left Options Grid */}
              <div className="flex-[1.5] pr-8 border-r border-gray-100">
                 <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                 {individualItems.map((item, index) => (
                   <Link
                     key={index}
                     to="/explore"
                     className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                   >
                     <div className="mt-1 transition-transform group-hover:scale-105">
                       {item.icon}
                     </div>
                     <div>
                       <h3 className="text-gray-900 font-semibold mb-0.5">{item.title}</h3>
                       <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                     </div>
                   </Link>
                 ))}
               </div>
            </div>
            
            {/* Right Promo Panel */}
            <div className="flex-[1.2] pl-10 pr-4 py-2 flex flex-col justify-start">
              <Link to="/explore" className="w-full flex items-center gap-8 group">
                <div className="w-[180px] h-[180px] shrink-0 overflow-hidden rounded-[32px] flex items-center justify-center">
                  <img src={systemUpdateImg} alt="System Update 2025" className="w-[100%] h-[100%] object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="flex-[1.2] flex flex-col justify-center">
                  <h3 className="text-[28px] font-normal text-gray-900 mb-2 leading-tight">System<br/>Update 2025</h3>
                  <p className="text-[22px] text-[#5b616e] mb-4 align-top leading-tight">The next<br/>chapter of<br/>Coinbase. Live<br/>on X 12/17.</p>
                  <span className="font-semibold text-gray-900 group-hover:text-[#0052FF] transition-colors underline decoration-2 underline-offset-4 text-[17px]">Learn more</span>
                </div>
              </Link>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown for Businesses */}
      {isBusinessesHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl hidden md:block"
          onMouseEnter={handleMouseEnterBusinesses}
          onMouseLeave={handleMouseLeaveBusinesses}
        >
          <div className="w-full overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-8 flex">
              {/* Left Options Grid */}
              <div className="flex-[1.5] pr-12 border-r border-gray-100">
                 <div className="grid grid-cols-2 grid-flow-row gap-x-12 gap-y-4">
                 {businessItems.map((item, index) => (
                   <Link
                     key={index}
                     to="/explore"
                     className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                   >
                     <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-1.5 rounded-lg flex items-center justify-center shrink-0">
                       {item.icon}
                     </div>
                     <div>
                       <h3 className="text-gray-900 font-semibold mb-0.5 leading-tight">{item.title}</h3>
                       <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                     </div>
                   </Link>
                 ))}
               </div>
            </div>
            
            {/* Right Promo Panel */}
            <div className="w-[450px] pl-12 py-2 flex items-center justify-between">
              <div className="w-32 rounded-2xl shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={commerceProtocolImg} alt="Commerce Protocol" className="w-full h-auto object-contain bg-blue-600 rounded-xl" />
              </div>
              <div className="flex flex-col justify-center ml-8 flex-1">
                  <h3 className="text-[26px] font-medium text-gray-900 leading-tight mb-2">Commerce Payments Protocol</h3>
                  <p className="text-base text-gray-600 leading-tight mb-4">A new standard for onchain payments.</p>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors underline underline-offset-4 text-base tracking-tight">Go to Payments</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown for Institutions */}
      {isInstitutionsHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl hidden md:block"
          onMouseEnter={handleMouseEnterInstitutions}
          onMouseLeave={handleMouseLeaveInstitutions}
        >
          <div className="w-full overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-8 flex">
              {/* Left Options Grid with Scroll */}
              <div className="flex-[2] pr-8 border-r border-gray-100 flex gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-6 sticky top-0 bg-white z-10 py-1">
                  <h2 className="font-semibold text-gray-900 text-lg">Prime</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-500 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-4">
                  {institutionPrimeItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/explore"
                      className="flex items-start gap-4 p-2 -ml-2 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-base">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-6 sticky top-0 bg-white z-10 py-1">
                  <h2 className="font-semibold text-gray-900 text-lg">Markets</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {institutionMarketsItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/explore"
                      className="flex items-start gap-4 p-2 -ml-2 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-base">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Promo Panel */}
            <div className="w-[480px] pl-[60px] pr-4 py-4 flex items-center justify-between">
              <div className="w-[200px] h-[200px] bg-[#0052FF] rounded-[32px] overflow-hidden flex items-center justify-center relative hidden sm:block shrink-0 shadow-lg border border-blue-500">
                 {/* Map approximation */}
                 <div className="absolute inset-0 opacity-80" style={{
                    backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)',
                    backgroundSize: '10px 10px',
                    backgroundPosition: '0 0'
                 }}></div>
                 <div className="absolute right-0 top-0 w-12 h-12 bg-[#0052FF] rounded-bl-[20px]"></div>
                 <div className="absolute left-0 bottom-10 w-8 h-12 bg-[#0052FF] rounded-tr-[16px]"></div>
                 <div className="absolute right-4 bottom-0 w-24 h-8 bg-[#0052FF] rounded-tl-[16px]"></div>
                 <div className="absolute left-1/4 top-1/4 w-12 h-16 bg-[#0052FF] opacity-40 blur-[4px]"></div>
                 <div className="absolute right-1/4 bottom-1/4 w-16 h-12 bg-[#0052FF] opacity-40 blur-[4px]"></div>
              </div>
              <div className="flex flex-col justify-center ml-10 flex-1">
                  <h3 className="text-[28px] font-normal text-gray-900 leading-tight">Our clients</h3>
                  <div className="text-[26px] text-gray-500 font-normal leading-tight mb-4 mt-1">
                    Trusted by <br/> institutions <br/> and <br/> government.
                  </div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors underline underline-offset-4 text-[17px]">Learn more</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown for Developers */}
      {isDevelopersHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl hidden md:block"
          onMouseEnter={handleMouseEnterDevelopers}
          onMouseLeave={handleMouseLeaveDevelopers}
        >
          <div className="w-full overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-8 flex">
              {/* Left Options Grid */}
              <div className="flex-[2] pr-8 border-r border-gray-100 flex gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-6 sticky top-0 bg-white z-10 py-1">
                  <h2 className="font-semibold text-gray-900 text-[17px]">Coinbase Developer Platform</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-900 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-4">
                  {developerPlatformItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/explore"
                      className="flex items-start gap-4 p-2 -ml-2 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-base">{item.title}</h3>
                        <p className="text-gray-500 text-[15px] leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-6 sticky top-0 bg-white z-10 py-1">
                  <h2 className="font-semibold text-gray-900 text-[17px]">Solutions for any company</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {developerSolutionsItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/explore"
                      className="flex items-start gap-4 p-2 -ml-2 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-base">{item.title}</h3>
                        <p className="text-gray-500 text-[15px] leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Promo Panel */}
            <div className="flex-[1.5] pl-10 pr-4 py-0 flex items-center">
              <Link to="/explore" className="w-full flex items-center gap-10 group">
                  <div className="w-[200px] h-[200px] shrink-0 overflow-hidden rounded-[36px] bg-gray-50 flex items-center justify-center">
                     <img src={worldClassImg} alt="Platform" className="w-[110%] h-[110%] object-contain mt-4 -ml-4 group-hover:scale-105 transition-transform duration-500 ease-out" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-2">
                      <h3 className="text-[34px] font-normal text-gray-900 leading-[1.05] tracking-[-0.02em] mb-2 group-hover:text-[#0052FF] transition-colors duration-300">
                        World class<br/>crypto<br/>infrastructure.
                      </h3>
                      <div className="text-[26px] text-[#5b616e] font-normal leading-[1.15] tracking-[-0.02em] mb-6 group-hover:text-gray-900 transition-colors duration-300">
                        Discover<br/>Coinbase's<br/>complete<br/>crypto-as-a-<br/>service<br/>platform.
                      </div>
                      <span className="font-semibold text-gray-900 underline decoration-2 underline-offset-[5px] text-[17px] group-hover:text-[#0052FF] transition-colors duration-300">Learn more</span>
                  </div>
              </Link>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown for Company */}
      {isCompanyHovered && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl hidden md:block"
          onMouseEnter={handleMouseEnterCompany}
          onMouseLeave={handleMouseLeaveCompany}
        >
          <div className="w-full overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-8 flex">
              {/* Left Options Grid */}
              <div className="flex-[2] pr-8 border-r border-gray-100">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {companyItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/explore"
                      className="flex items-start gap-4 p-2 -ml-2 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-105 bg-gray-100/60 p-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-base">{item.title}</h3>
                        <p className="text-gray-500 text-[15px] leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            {/* Right Promo Panel */}
            <div className="flex-[1.2] pl-[60px] pr-4 py-0 flex items-center justify-between">
              <div className="w-[180px] h-[120px] rounded-2xl overflow-hidden flex items-center justify-center relative hidden sm:block shrink-0 shadow-sm mr-8">
                 <img src={cryptoMovesImg} alt="Crypto moves money forward" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-[28px] font-normal text-gray-900 leading-[1.15] tracking-[-0.02em] mb-1">Learn all about<br/>Coinbase:</h3>
                  <div className="text-[28px] text-gray-500 font-normal leading-[1.15] tracking-[-0.02em] mb-6">
                    We're building<br/>the open<br/>financial<br/>system.
                  </div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors underline underline-offset-4 text-[17px]">Create your account</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
