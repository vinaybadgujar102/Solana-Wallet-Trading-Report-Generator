import axios from "axios";

const BASE_URL = "https://pro-api.solscan.io/v2.0";

import { GetTransactionHistoryApiResponse } from "@repo/types";

export const fetchTransactionHistory = async (
  walletAddress: string,
  limit?: number
) => {
  try {
    const response: GetTransactionHistoryApiResponse = await axios.get(
      `${BASE_URL}/account/transactions`,
      {
        params: {
          address: walletAddress,
          limit: limit || 10,
        },
      }
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
