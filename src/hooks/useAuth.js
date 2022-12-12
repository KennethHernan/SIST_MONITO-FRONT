import { authLoginAuditorDB, authLoginDB, registerDB } from "../services";
import { dataUser } from "../store/storeUser";
import { useAtom } from "jotai";

export const useAuth = () => {
  const [user, setUser] = useAtom(dataUser);

  const login = async (dataLogin) => {
    try {
      const response = await authLoginDB(dataLogin);
      const dataAgent = response.data.agent;
      setUser(dataAgent);
      return { dataAgent };
    } catch (error) {
      return { ok: false, msg: error.response.data.message };
    }
  };

  const loginAuditor = async (dataLogin) => {
    try {
      const response = await authLoginAuditorDB(dataLogin);
      const dataAuditor = response.data.auditor;
      setUser(dataAuditor);
      return { dataAuditor };
    } catch (error) {
      return { ok: false, msg: error.response.data.message };
    }
  };

  const register = async (dataRegister) => {
    try {
      const response = await registerDB(dataRegister);
      return response;
    } catch (error) {
      return { ok: false, msg: "error" };
    }
  };

  return { login, loginAuditor, register, user };
};
