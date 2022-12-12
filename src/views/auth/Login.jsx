import "../../style/auth.css";
import logo from "../../assets/mtg.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({});
  const [checked, setChecked] = useState("agent");
  const { login, loginAuditor } = useAuth();

  const onLogin = async (e) => {
    e.preventDefault();

    if (checked === "auditor") {
      const { dataAuditor, msg } = await loginAuditor(dataLogin);
      console.log(dataAuditor);

      if (!dataAuditor) {
        return;
      }

      navigate("/HomeAuditor");
    }

    if (checked === "agent") {
      const { dataAgent, msg } = await login(dataLogin);
      console.log(dataAgent);

      if (!dataAgent) {
        return;
      }

      navigate("/HomeAgente");
    }
  };

  const changeRadioButton = (e) => {
    setChecked(e.target.value);
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
              <div className="inputs-checkbox">
                <div className="input-checkbox">
                  <label>Agent</label>
                  <input
                    type="radio"
                    value="agent"
                    onChange={changeRadioButton}
                    checked={checked === "agent" ? true : false}
                  />
                </div>

                <div className="input-checkbox">
                  <label>Auditor</label>
                  <input
                    type="radio"
                    value="auditor"
                    onChange={changeRadioButton}
                    checked={checked === "auditor" ? true : false}
                  />
                </div>
              </div>
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