import { authLoginDB } from "../services";

export const useAuth =  () => {
    const login = async (dataLogin) => {
        try {
        const response = await authLoginDB(dataLogin);
        //localStorage.setItem("token", response.token);
        //console.log('response', response.data.agent.user)  
        const {user} = response.data.agent 
        return user
        } catch (error) {
        return { ok: false, msg: 'error' };
        }
    };
    const register = async (dataRegister) => {
        try {
        const response = await registerDB(dataRegister);
        return response
        } catch (error) {
        return { ok: false, msg: 'error' };
        }
        
    }
    return { login, register };

}