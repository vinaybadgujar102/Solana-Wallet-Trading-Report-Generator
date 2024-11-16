"use client";

import React, { useState } from "react";

export default function WalletInput() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle wallet address submission
    console.log("Wallet address submitted:", walletAddress);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="wallet"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter Solana Wallet Address
            </label>
            <input
              id="wallet"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         text-white placeholder-gray-400"
              placeholder="Enter your Solana wallet address..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 
                     hover:from-purple-600 hover:to-pink-600 rounded-lg text-white 
                     font-medium transition-all duration-200 transform hover:scale-[1.02]"
          >
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
}
