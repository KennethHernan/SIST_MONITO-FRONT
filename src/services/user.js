import { MonitoApi } from "../api/MonitoAPI";

export const authLoginDB = async (dataLogin) => {
    const response = await MonitoApi.post("/auth/login-agent", dataLogin);
    return response;
}

export const registerDB = async (dataRegister) => {
    const response = await MonitoApi.post("/auth/register-agent", dataRegister);
    return response;
}

export const revalidateToken = async () => {
    const response = await MonitoApi.get("/auth/renew");
    return response;
}

//ordenar en otra carpeta
export const listAgentsDB = async () => {
    const response = await MonitoApi.get("/agent/agents");
    return response;
}