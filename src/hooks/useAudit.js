import { listSurveyAgentById, listAuditAgentById } from "../services";
import { createAudit } from "../services/audit";

export const useAudit = () => {
  const getSurveyAgentByID = async (id) => {
    try {
      const response = await listSurveyAgentById(id);
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error);
      return { ok: false, msg: "error" };
    }
  };

  const sendAudit = async (dataAudit) => {
    try {
      const response = await createAudit(dataAudit);
      return response;
    } catch (error) {
      console.log(error, "errorsote");
      return { ok: false, msg: "error" };
    }
  };

  const getAuditAgentByID = async (id) => {
    try {
      const response = await listAuditAgentById(id);
      return response.data;
    } catch (error) {
      console.log(error);
      return { ok: false, msg: "error" };
    }
  };

  return { getSurveyAgentByID, sendAudit, getAuditAgentByID };
};
