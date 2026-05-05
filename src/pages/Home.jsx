import { useState } from "react";
import { Link } from "react-router-dom";

// Import images via Vite so they work in production builds
import heroPhoneImg from "../assets/images/hero-phone.png";
import tradingImg from "../assets/images/trading.png";
import freeTrialImg from "../assets/images/free-trial.png";
import baseAppImg from "../assets/images/base-app.png";
import learnUsdcImg from "../assets/images/learn-usdc.png";
import learnBankImg from "../assets/images/learn-bankaccount.png";
import learnInvestImg from "../assets/images/learn-invest.png";
import ctaLogosImg from "../assets/images/cta-logos.png";

import bitcoinIcon from "../assets/icons/Bitcoin.png";
import ethereumIcon from "../assets/icons/Ethereum.png";
import chainlinkIcon from "../assets/icons/Chainlink.png";
import cardanoIcon from "../assets/icons/Cardano.png";

const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: bitcoinIcon,
    price: "GHS 732,554.40",
    change: "↗ 5.9%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: ethereumIcon,
    price: "GHS 21,355.52",
    change: "↗ 6.25%",
  },
  {
    name: "Tether",
    symbol: "USDT",
    icon: chainlinkIcon,
    price: "GHS 10.77",
    change: "↗ 0.02%",
  },
  {
    name: "BNB",
    symbol: "BNB",
    icon: bitcoinIcon,
    price: "GHS 6,753.10",
    change: "↗ 3.55%",
  },
  {
    name: "XRP",
    symbol: "XRP",
    icon: cardanoIcon,
    price: "GHS 14.70",
    change: "↗ 3.85%",
  },
  {
    name: "USDC",
    symbol: "USDC",
    icon: ethereumIcon,
    price: "GHS 10.77",
    change: "--",
  },
];

function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={heroPhoneImg}
            alt="Coinbase App"
            className="w-full rounded-3xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            The future of finance is here.
          </h1>
          <p className="text-gray-500 mb-8 text-lg">
            Trade crypto and more on a platform you can trust.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:border-blue-600"
            />
            <Link
              to="/signup"
              className="text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap"
              style={{ backgroundColor: "#1652F0" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>


      {/* Explore Crypto Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>
          <p className="text-gray-500 mb-8">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>
          <Link
            to="/explore"
            className="text-white px-6 py-3 rounded-full font-semibold inline-block"
            style={{ backgroundColor: "#000000" }}
          >
            See more assets
          </Link>
        </div>
        <div className="bg-gray-900 rounded-3xl p-6">
          <div className="flex gap-4 mb-6">
            <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">
              Tradable
            </span>
            <span className="text-gray-400 text-sm py-1">Top gainers</span>
            <span className="text-gray-400 text-sm py-1">New on Coinbase</span>
          </div>
          {cryptos.map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex items-center justify-between py-3 border-b border-gray-700"
            >
              <div className="flex items-center gap-3">
                <img
                  src={crypto.icon}
                  alt={crypto.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-medium">{crypto.name}</span>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">{crypto.price}</p>
                <p className="text-green-400 text-xs">{crypto.change}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Trading Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden order-last md:order-none">
          <img
            src={tradingImg}
            alt="Advanced Trading"
            className="w-full rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Powerful tools, designed for the advanced trader.
          </h2>
          <p className="text-gray-500 mb-8">
            Powerful analytical tools with the safety and security of Coinbase
            deliver the ultimate trading experience.
          </p>
          <button
            className="text-white px-6 py-3 rounded-full font-semibold"
            style={{ backgroundColor: "#000000" }}
          >
            Start trading
          </button>
        </div>
      </section>

      {/* Coinbase One Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 mb-6">
            <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#1652F0" />
              <path
                d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C25.822 32 30.704 27.969 31.747 22.5H25.4C24.478 25.107 22.444 27 20 27C16.686 27 14 23.866 14 20C14 16.134 16.686 13 20 13C22.444 13 24.478 14.893 25.4 17.5H31.747C30.704 12.031 25.822 8 20 8Z"
                fill="white"
              />
            </svg>
            COINBASE ONE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Zero trading fees, more rewards.
          </h2>
          <p className="text-gray-500 mb-8">
            Get more out of crypto with one membership: zero trading fees,
            boosted rewards, priority support, and more.
          </p>
          <button
            className="text-white px-6 py-3 rounded-full font-semibold"
            style={{ backgroundColor: "#000000" }}
          >
            Claim free trial
          </button>
        </div>
        <div className="bg-gray-100 rounded-3xl overflow-hidden">
          <img
            src={freeTrialImg}
            alt="Coinbase One"
            className="w-full rounded-3xl"
          />
        </div>
      </section>

      {/* Base App Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 rounded-3xl overflow-hidden">
          <img
            src={baseAppImg}
            alt="Base App"
            className="w-full rounded-3xl"
          />
        </div>
        <div>
          <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 mb-6">
            <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#1652F0" />
              <path
                d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C25.822 32 30.704 27.969 31.747 22.5H25.4C24.478 25.107 22.444 27 20 27C16.686 27 14 23.866 14 20C14 16.134 16.686 13 20 13C22.444 13 24.478 14.893 25.4 17.5H31.747C30.704 12.031 25.822 8 20 8Z"
                fill="white"
              />
            </svg>
            BASE APP
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Countless ways to earn crypto with the Base App.
          </h2>
          <p className="text-gray-500 mb-8">
            An everything app to trade, create, discover, and chat, all in one
            place.
          </p>
          <Link
            to="/learn"
            className="text-white px-6 py-3 rounded-full font-semibold inline-block"
            style={{ backgroundColor: "#000000" }}
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Learn Basics Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-start">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              New to crypto? Learn some crypto basics
            </h2>
            <div>
              <p className="text-gray-500 mb-6">
                Beginner guides, practical tips, and market updates for
                first-timers, experienced investors, and everyone in between
              </p>
              <Link
                to="/learn"
                className="text-white px-6 py-3 rounded-full font-semibold inline-block"
                style={{ backgroundColor: "#000000" }}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cursor-pointer hover:opacity-90 transition">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={learnUsdcImg}
                  alt="USDC"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                USDC: The digital dollar for the global crypto economy
              </h3>
              <p className="text-gray-500 text-sm">
                Coinbase believes crypto will be part of the solution for
                creating an open financial system...
              </p>
            </div>
            <div className="cursor-pointer hover:opacity-90 transition">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={learnBankImg}
                  alt="Bank"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Can crypto really replace your bank account?
              </h3>
              <p className="text-gray-500 text-sm">
                If you're a big enough fan of crypto, you've probably heard the
                phrase "be your own bank"...
              </p>
            </div>
            <div className="cursor-pointer hover:opacity-90 transition">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={learnInvestImg}
                  alt="Invest"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                When is the best time to invest in crypto?
              </h3>
              <p className="text-gray-500 text-sm">
                Cryptocurrencies like Bitcoin can experience daily price
                volatility...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Take control of your money
          </h2>
          <p className="text-gray-500 mb-8">
            Start your portfolio today and discover crypto
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-blue-600"
            />
            <Link
              to="/signup"
              className="text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap"
              style={{ backgroundColor: "#1652F0" }}
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={ctaLogosImg}
            alt="Crypto logos"
            className="w-full max-w-sm"
          />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="text-center text-gray-400 text-xs px-6 pb-8 max-w-3xl mx-auto">
        <p className="mb-2">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <p>
          Products and features may not be available in all regions. Information
          is for informational purposes only, and is not (i) an offer, or
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) intended to provide accounting, legal, or tax advice,
          or investment recommendations. Trading cryptocurrency comes with risk.
        </p>
      </div>
    </main>
  );
}

export default Home;
