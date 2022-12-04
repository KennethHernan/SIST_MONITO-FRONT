import { authLoginDB } from "../services";
import { listAgentsDB } from "../services";


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
  
  return { getAgents, getSurveys };
  }
