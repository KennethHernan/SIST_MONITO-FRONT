import { listSurveyAgentById } from "../services";
import { createAudit } from "../services/audit";

export const useAudit =  () => {

    const getSurveyAgentByID = async (id) => {
        try {
        const response = await listSurveyAgentById(id);
        const result = response.data
        return result
        } catch (error) {
        return { ok: false, msg: 'error' };
        }
    };

    const sendAudit = async (dataAudit) => {
        try {
        const response = await createAudit(dataAudit);
        return response
        } catch (error) {
            console.log(error, "errorsote")
        return { ok: false, msg: 'error' };
        }
    };
    return { getSurveyAgentByID, sendAudit};

}