import React from "react";

export default function Hero() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Solana Wallet Report Generator
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Generate detailed trading reports from your Solana wallet transactions.
        Get insights into your trading history with just one click.
      </p>
    </div>
  );
}
