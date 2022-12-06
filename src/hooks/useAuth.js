import { authLoginDB } from "../services";
import { dataUser } from "../store/storeUser";
import { useAtom } from "jotai";

export const useAuth =  () => {
    const [user, setUser] = useAtom(dataUser);

    const login = async (dataLogin) => {
        try {
        const response = await authLoginDB(dataLogin);
        //localStorage.setItem("token", response.token);
        //console.log('response', response.data.agent.user)  
        const {user} = response.data.agent 
        setUser(user);
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