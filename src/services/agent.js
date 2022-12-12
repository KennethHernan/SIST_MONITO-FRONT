import { MonitoApi } from "../api/MonitoAPI"

export const findAgentByID = async(id) =>{
    const response = await MonitoApi.get(`/agent/agents/${id}`)
    return response
}