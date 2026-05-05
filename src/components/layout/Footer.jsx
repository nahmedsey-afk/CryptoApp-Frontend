function Footer() {
  const columns = [
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "Affiliates",
        "Blog",
        "Press",
        "Security",
        "Investors",
        "Vendors",
        "Legal & privacy",
        "Cookie policy",
        "Cookie preferences",
        "Digital Asset Disclosures",
      ],
    },
    {
      title: "Learn",
      links: [
        "Explore",
        "Market statistics",
        "Coinbase Bytes newsletter",
        "Crypto basics",
        "Tips & tutorials",
        "Crypto glossary",
        "Market updates",
        "What is Bitcoin?",
        "What is crypto?",
        "What is a blockchain?",
        "How to set up a crypto wallet?",
        "How to send crypto?",
        "Taxes",
      ],
    },
    {
      title: "Individuals",
      links: [
        "Buy & sell",
        "Earn free crypto",
        "Base App",
        "Coinbase One",
        "Debit Card",
      ],
      extra: [
        {
          title: "Businesses",
          links: [
            "Asset Listings",
            "Coinbase Business",
            "Payments",
            "Commerce",
            "Token Manager",
          ],
        },
        {
          title: "Institutions",
          links: [
            "Prime",
            "Staking",
            "Exchange",
            "International Exchange",
            "Derivatives Exchange",
            "Verified Pools",
          ],
        },
      ],
    },
    {
      title: "Developers",
      links: [
        "Developer Platform",
        "Base",
        "Server Wallets",
        "Embedded Wallets",
        "Base Accounts (Smart Wallets)",
        "Onramp & Offramp",
        "x402",
        "Trade API",
        "Paymaster",
        "OnchainKit",
        "Data API",
        "Verifications",
        "Node",
        "AgentKit",
        "Staking",
        "Faucet",
        "Exchange API",
        "International Exchange API",
        "Prime API",
        "Derivatives API",
      ],
    },
    {
      title: "Support",
      links: [
        "Help center",
        "Contact us",
        "Create account",
        "ID verification",
        "Account information",
        "Payment methods",
        "Account access",
        "Supported crypto",
        "Status",
      ],
      extra: [
        {
          title: "Asset prices",
          links: [
            "Bitcoin price",
            "Ethereum price",
            "Solana price",
            "XRP price",
          ],
        },
        {
          title: "Stock prices",
          links: [
            "NVIDIA price",
            "Apple price",
            "Microsoft price",
            "Amazon price",
          ],
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1652F0" />
            <path
              d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C25.822 32 30.704 27.969 31.747 22.5H25.4C24.478 25.107 22.444 27 20 27C16.686 27 14 23.866 14 20C14 16.134 16.686 13 20 13C22.444 13 24.478 14.893 25.4 17.5H31.747C30.704 12.031 25.822 8 20 8Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="text-gray-500 text-sm hover:text-blue-600 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
              {col.extra &&
                col.extra.map((section) => (
                  <div key={section.title} className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                      {section.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <li
                          key={link}
                          className="text-gray-500 text-sm hover:text-blue-600 cursor-pointer"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {["𝕏", "in", "📷", "♪"].map((icon) => (
            <span
              key={icon}
              className="text-gray-500 hover:text-gray-900 cursor-pointer text-lg"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🌐</span>
            <span>Global</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
