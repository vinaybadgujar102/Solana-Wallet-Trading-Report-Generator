import { Request, Response } from "express";
import { fetchTransactionHistory } from "../services/solanaService";

export const generateReport = async (req: Request, res: Response) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address is required" });
  }

  try {
    const transactions = await fetchTransactionHistory(walletAddress);
    // Filter or format transactions as needed
    if (transactions === undefined) {
      return res.status(200).json({ report: [] });
    }

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate report" });
  }
};
