import "../../style/auth.css";
import logo from "../../assets/mtg.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState} from "react";
import { useAuth } from "../../hooks/useAuth";



export const Login = () => {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState([]);
  const { login } = useAuth();

  const onLogin = async (e) => {
    e.preventDefault();
    const user  = await login(dataLogin);
    if (!user) {
      return 
    }
    try {
      if (user && user.role.rolName === "AUDITOR") {
        console.log('HOME AUDITOR');
        navigate("/HomeAuditor");
        
       }else{
         console.log("HOME AGENTE");
          navigate("/HomeAgente");
       }
  
      
    } catch (error) {
      console.log("error", error);
      
    }
   
  };


  return (
    <div className="body">
      <div className="headerLog">
        <img src={logo} alt="logo" />
      </div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Sing in</p>
          </div>
          <div className="formContent">
            <form onSubmit={onLogin}>
              Correo
              <input
                type="email"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, email: e.target.value })
                }
              />
              Contraseña
              <input
                type="password"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, password: e.target.value })
                }
              />
              <div>
              
                  <input type="submit" value="Continuar" />
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footLog">
        <div className="content-descrip">
          <p> &copy; 2022 MTG - Todos los derechos reservados</p>
        </div>
        <div className="content-Suport">
          <button>Soporte</button>
        </div>
      </div>
    </div>
  );
};
