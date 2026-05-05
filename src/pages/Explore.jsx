import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCrypto from "../hooks/useCrypto";
import searchIcon from "../assets/icons/search icon.png";

import btcIcon from "../assets/icons/Bitcoin.png";
import ethIcon from "../assets/icons/Ethereum.png";
import usdtIcon from "../assets/icons/Coinbase.png"; // Placeholder for Tether
import bnbIcon from "../assets/icons/Coinbase.png"; // Placeholder
import solIcon from "../assets/icons/Solana.png";
import adaIcon from "../assets/icons/Cardano.png";
import dogeIcon from "../assets/icons/Dogecoin.png";
import dotIcon from "../assets/icons/Polkadot.png";
import linkIcon from "../assets/icons/Chainlink.png";
import ltcIcon from "../assets/icons/Litecoin.png";

const iconMap = {
  Bitcoin: btcIcon,
  Ethereum: ethIcon,
  Tether: usdtIcon,
  BNB: bnbIcon,
  Solana: solIcon,
  "USD Coin": usdtIcon, // Generic placeholder
  XRP: bnbIcon, // Generic placeholder
  Dogecoin: dogeIcon,
  Cardano: adaIcon,
  Polkadot: dotIcon,
  Chainlink: linkIcon,
  Litecoin: ltcIcon,
};

function Explore() {
  const { data: cryptos, loading } = useCrypto();
  const [activeTab, setActiveTab] = useState("All assets");

  // Format numbers nicely
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GHS",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatMarketCap = (value) => {
    if (value >= 1e12) return `GHS ${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `GHS ${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `GHS ${(value / 1e6).toFixed(2)}M`;
    return formatCurrency(value);
  };

  // Mock Sparkline SVG component
  const Sparkline = ({ color = "#16c784", isDown = false }) => (
    <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
      {isDown ? (
        <path d="M0 20 Q 25 35, 50 25 T 100 35" fill="none" stroke="#ea3943" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M0 30 Q 25 5, 50 15 T 100 5" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {/* Light fill below line */}
      {isDown ? (
        <path d="M0 20 Q 25 35, 50 25 T 100 35 L 100 40 L 0 40 Z" fill="#ea3943" fillOpacity="0.1" />
      ) : (
        <path d="M0 30 Q 25 5, 50 15 T 100 5 L 100 40 L 0 40 Z" fill={color} fillOpacity="0.1" />
      )}
    </svg>
  );

  return (
    <main className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col lg:flex-row gap-12">
      
      {/* LEFT MAIN CONTENT */}
      <div className="flex-1 min-w-0">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-[28px] font-bold text-gray-900 mb-1">Explore crypto</h1>
            <p className="text-gray-500 text-sm font-medium">
              Coinbase 50 Index is down <span className="text-red-500 font-semibold">↘ 3.77% (24 hrs)</span>
              <button className="ml-1 text-gray-400 hover:text-gray-600">ⓘ</button>
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <img src={searchIcon} alt="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-60" />
            <input 
              type="text" 
              placeholder="Search for an asset"
              className="w-full bg-gray-100 rounded-full py-3 pl-[44px] pr-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-600 transition-shadow placeholder-gray-500"
            />
          </div>
        </div>

        {/* Market Stats */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[22px] font-bold text-gray-900">Market stats</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&lt;</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is $2.55 trillion, representing a 5.61% decrease from last week.
          </p>
          <button className="text-blue-600 text-sm font-semibold hover:underline mb-6">Read more</button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stat Card 1 */}
            <div className="bg-gray-50/80 rounded-[14px] p-5 border border-gray-100 relative overflow-hidden">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total market cap</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-900 font-bold">GHS 25.55T</span>
                <span className="text-red-500 text-sm font-semibold">↘ 0.72%</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 opacity-80">
                <Sparkline isDown={true} />
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-gray-50/80 rounded-[14px] p-5 border border-gray-100 relative overflow-hidden">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total volume</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-900 font-bold">GHS 1.52T</span>
                <span className="text-green-500 text-sm font-semibold">↗ 49.62%</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 opacity-80">
                <Sparkline color="#16c784" />
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-gray-50/80 rounded-[14px] p-5 border border-gray-100 relative overflow-hidden">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">DeFi volume</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-900 font-bold">GHS 0.77</span>
                <span className="text-green-500 text-sm font-semibold">↗ 6.93%</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 opacity-80">
                <Sparkline color="#16c784" />
              </div>
            </div>
          </div>
        </div>

        {/* Crypto Table Section */}
        <div>
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">Crypto market prices <span className="text-gray-400 text-sm font-normal ml-1">in Ghana</span></h2>
          <p className="text-gray-500 text-sm mb-2">
            The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is $2.55 trillion, representing a 0.61% increase from last week.
          </p>
          <button className="text-blue-600 text-xs font-semibold uppercase tracking-wider hover:underline mb-6">Read more</button>

          {/* Table Filters */}
          <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 whitespace-nowrap transition-colors">
              🌐 All assets <span className="text-gray-400 text-xs ml-1">▼</span>
            </button>
            {["1H", "24H", "1W", "1M", "1Y"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === tab ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 pl-2 font-semibold text-gray-500 text-sm w-8">#</th>
                  <th className="py-4 font-semibold text-gray-500 text-sm">Asset <span className="text-[10px] ml-1">↕</span></th>
                  <th className="py-4 font-semibold text-gray-500 text-sm text-right">Market price <span className="text-[10px] ml-1">↕</span></th>
                  <th className="py-4 font-semibold text-gray-500 text-sm text-center w-32">Chart</th>
                  <th className="py-4 font-semibold text-gray-500 text-sm text-right">Change <span className="text-[10px] ml-1">↕</span></th>
                  <th className="py-4 font-semibold text-gray-500 text-sm text-right">Mkt cap <span className="text-[10px] ml-1">↕</span></th>
                  <th className="py-4 pr-2 font-semibold text-gray-500 text-sm text-right">Volume <span className="text-[10px] ml-1">↕</span></th>
                  <th className="py-4 pr-4 font-semibold text-gray-500 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="8" className="text-center py-20">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </td>
                  </tr>
                ) : (
                  cryptos.slice(0, 10).map((crypto, index) => {
                    const change = crypto.change || 0;
                    const isPositive = change >= 0;
                    
                    // The mock data format is like marketCap: "$847B" and volume: "$28.4B"
                    const displayMarketCap = typeof crypto.marketCap === 'string' 
                      ? crypto.marketCap.replace('$', 'GHS ') 
                      : formatMarketCap(crypto.marketCap * 12);
                      
                    const displayVolume = typeof crypto.volume === 'string'
                      ? crypto.volume.replace('$', 'GHS ')
                      : formatMarketCap((crypto.volume || 0) * 12);
                    
                    return (
                      <tr key={crypto.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group cursor-pointer">
                        <td className="py-5 pl-2 text-gray-400 font-medium text-sm">
                          <button className="text-gray-300 hover:text-gray-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">☆</button>
                          {index + 1}
                        </td>
                        <td className="py-5">
                          <div className="flex items-center gap-3">
                            <img src={iconMap[crypto.name] || iconMap["Tether"]} alt={crypto.name} className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                              <span className="font-bold text-gray-900">{crypto.name}</span>
                              <span className="text-gray-500 font-medium text-[13px]">{crypto.symbol.toUpperCase()}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 text-right font-medium text-gray-900">
                           {formatCurrency(crypto.price * 12)} {/* Mock GHS Conversion */}
                        </td>
                        <td className="py-5 w-32 px-4">
                           <Sparkline color={isPositive ? "#16c784" : "#ea3943"} isDown={!isPositive} />
                        </td>
                        <td className={`py-5 text-right font-semibold text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                           {isPositive ? '↗' : '↘'} {Math.abs(change).toFixed(2)}%
                        </td>
                        <td className="py-5 text-right font-medium text-gray-900 text-sm">
                           {displayMarketCap}
                        </td>
                        <td className="py-5 pr-2 text-right font-medium text-gray-900 text-sm">
                           {displayVolume}
                        </td>
                        <td className="py-5 pr-4 text-right">
                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2 rounded-full transition-colors">Trade</button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-16">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-50">&lt;</button>
            <button className="w-8 h-8 rounded-full bg-blue-600 font-bold flex items-center justify-center text-white">1</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-700 hover:bg-gray-100">2</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-700 hover:bg-gray-100">3</button>
            <span className="text-gray-400 mx-1">...</span>
            <button className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-700 hover:bg-gray-100">1,027</button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#0052FF] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-xl mb-12">
          <div className="p-10 md:p-14 md:w-[60%] flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-[34px] font-bold text-white mb-6 leading-tight max-w-[400px]">
              Create a Coinbase account to trade crypto. It's quick, easy, and secure.
            </h2>
            <Link to="/signup" className="bg-white text-black font-bold py-4 px-8 rounded-full text-base hover:bg-gray-100 transition-colors flex items-center gap-3">
              Start Trading <span>→</span>
            </Link>
          </div>
          <div className="md:w-[40%] bg-blue-500 relative min-h-[250px] md:min-h-0 flex items-end justify-center">
             {/* Mock Chart Graphic in CTA */}
             <div className="relative w-full h-[80%] flex items-end justify-center px-10 pb-8 gap-4 opacity-90">
                <div className="w-16 bg-[#1652F0] rounded-tl-lg rounded-tr-lg border-2 border-black" style={{ height: '40%' }}></div>
                <div className="w-16 bg-[#00D395] rounded-tl-lg rounded-tr-lg border-2 border-black" style={{ height: '70%' }}></div>
                <div className="w-16 bg-[#FF0055] rounded-tl-lg rounded-tr-lg border-2 border-black" style={{ height: '55%' }}></div>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-black translate-y-4"></div>
                <div className="absolute top-1/4 right-0 w-full h-1 bg-black -rotate-12 translate-y-12 origin-right"></div>
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-[320px] flex flex-col gap-8">
        
        {/* Sign Up Widget */}
        <div className="bg-[#0052FF] rounded-[20px] p-6 text-white relative overflow-hidden shadow-lg">
           <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Get started</h3>
              <p className="text-sm text-blue-100 font-medium mb-5">Create your account today</p>
              <Link to="/signup" className="inline-block bg-white text-black font-bold py-2.5 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors">
                Sign up
              </Link>
           </div>
           {/* Decorative UI element */}
           <div className="absolute top-4 right-4 z-0">
             <div className="w-16 h-16 rounded-full bg-yellow-400 border-[3px] border-black flex items-center justify-center relative">
               <div className="w-1 h-8 bg-black"></div>
               <div className="w-8 h-1 bg-black absolute"></div>
               <div className="w-3 h-3 rounded-full bg-blue-600 absolute -top-1 -right-1"></div>
             </div>
             <div className="w-12 h-12 rounded-full bg-green-500 border-[3px] border-black absolute -bottom-4 -left-6"></div>
           </div>
        </div>

        {/* Top Movers Widget */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-2">
             <h3 className="font-bold text-gray-900 text-[17px]">Top movers</h3>
             <div className="flex gap-2">
               <button className="text-gray-400 hover:text-gray-900 transition-colors">←</button>
               <button className="text-gray-400 hover:text-gray-900 transition-colors">→</button>
             </div>
           </div>
           <p className="text-gray-500 text-xs font-medium mb-4">24 hr change</p>

           <div className="grid grid-cols-2 gap-3">
             {/* Simple Mock Cards taking generic colors/icons for now */}
             <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-red-800 flex items-center justify-center text-white text-xs font-bold mb-3">ALCX</div>
               <p className="font-bold text-sm text-gray-900">ALCX</p>
               <p className="text-red-500 font-bold text-[15px] my-1">↗ 20.17%</p>
               <p className="text-gray-500 text-[13px] font-medium">GHS 54.25</p>
             </div>
             <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-xs font-bold mb-3">K</div>
               <p className="font-bold text-sm text-gray-900">KEEP</p>
               <p className="text-red-500 font-bold text-[15px] my-1">↗ 19.38%</p>
               <p className="text-gray-500 text-[13px] font-medium">GHS 0.14</p>
             </div>
           </div>
        </div>

        {/* New on Coinbase Widget */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-gray-900 text-[17px]">New on Coinbase</h3>
             <div className="flex gap-2">
               <button className="text-gray-400 hover:text-gray-900 transition-colors">←</button>
               <button className="text-gray-400 hover:text-gray-900 transition-colors">→</button>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-3">
             <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-white text-xs font-bold mb-3">H</div>
               <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1">HYPE</p>
               <p className="font-bold text-[15px] text-gray-900 mb-0.5">Hyperliquid</p>
               <p className="text-gray-500 text-[13px] font-medium">Added Feb 1</p>
             </div>
             <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center text-white text-xs font-bold mb-3">J</div>
               <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1">JUP</p>
               <p className="font-bold text-[15px] text-gray-900 mb-0.5">Jupiter</p>
               <p className="text-gray-500 text-[13px] font-medium">Added Dec 2</p>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}

export default Explore;
