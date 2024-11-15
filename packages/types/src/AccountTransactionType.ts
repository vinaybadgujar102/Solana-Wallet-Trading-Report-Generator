type ParsedInstruction = {
  type: string;
  program: string;
  program_id: string;
};

type DataItem = {
  slot: number;
  fee: number;
  status: "Success" | "Fail"; // Assuming these are the possible values
  signer: string[];
  block_time: number;
  tx_hash: string;
  parsed_instructions: ParsedInstruction[];
  program_ids: string[];
  time: string; // ISO 8601 date string
};

export type GetTransactionHistoryApiResponse = {
  success: boolean;
  data: DataItem[];
};
