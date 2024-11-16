import React from "react";
import WalletInput from "@/components/WalletInput";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <WalletInput />
        <Features />
        <WalletMultiButton className="w-full" />
      </div>
    </main>
  );
}
