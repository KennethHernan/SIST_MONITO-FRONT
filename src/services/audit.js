import { MonitoApi } from "../api/MonitoAPI";

export const createAudit = async (dataAudit) => {
  const response = await MonitoApi.post("/audit/create", dataAudit);
  return response;
};

export const listAuditAgentById = async (id) => {
  const response = await MonitoApi.get(`/audit/audits/agent/${id}`);
  return response;
};
