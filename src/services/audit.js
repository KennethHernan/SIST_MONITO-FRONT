import { MonitoApi } from "../api/MonitoAPI";

export const createAudit = async (dataAudit) => {
    const response = await MonitoApi.post("/audit/create", dataAudit);
    return response;
  };