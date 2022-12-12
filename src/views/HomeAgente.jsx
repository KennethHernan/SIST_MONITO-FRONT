import "../style/homeAgente.css";
import { HeaderAgente } from "../components/ui/HeaderAgente";
import { Link, useNavigate } from "react-router-dom";
import usuario from "../assets/usuario.png";
import { dataUser } from "../store/storeUser";
import { useAtom } from "jotai";

export const HomeAgente = () => {
  const [user, setUser] = useAtom(dataUser);
  const navigate = useNavigate()

  console.log(user.surveys);

  return (
    <div className="bodyAgente">
      <HeaderAgente />
      <div className="content-title-audi">
        <p>Lista de auditorias</p>
        <div className="content-firma">
          <select>
            <option value="0">Firmado</option>
            <option value="1">No Firmado</option>
          </select>
        </div>
      </div>
      <div className="content-notification">
        {user.surveys.map((notification) => {
          return (
            <li key={notification.idSurvey}>
              <div className="notification-main">
                <div className="main-profile">
                  <img src={usuario} alt="usuario" />
                </div>
                <div className="main-description">
                  <p>Auditor: Kenneth</p>
                  <div className="main-fecha">
                    <div>
                      <p>
                        Submitted an evaluation - check your quality evaluation
                        results for
                      </p>
                    </div>
                    <div>
                      <p>{notification.createdAt}</p>
                    </div>
                  </div>
                </div>
                <div className="main-button">
                    <button onClick={() => {
                          navigate(`/EvaluationAgente/${user.idAgent}`);
                        }}>Ver</button>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};
