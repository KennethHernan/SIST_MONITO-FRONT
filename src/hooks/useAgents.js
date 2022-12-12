import { listAgentsDB } from "../services";
import { findAgentByID } from "../services/agent";

export const useAgents = () => {
  const getAgents = async () => {
    try {
      const response = await listAgentsDB();
      return response.data;
    } catch (error) {
      return { ok: false, msg: 'holas' };
    }
  };
  const getSurveys = async (id) => { //encuestas por agente 
    try {
      const response = await getSurveysDB(id);
      return response
    } catch (error) {
      return { ok: false, msg: 'error' };
    }

  }

  const getAgentById = async (id) => {
    try {
      const response = await findAgentByID(id);
      return response.data;
    } catch (error) {
      return { ok: false, msg: "holas" };
    }
  };
  
  return { getAgents, getSurveys, getAgentById };
  }
