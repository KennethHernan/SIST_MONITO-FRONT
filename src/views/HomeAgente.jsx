import "../style/homeAgente.css";
import { HeaderAgente } from '../components/ui/HeaderAgente';
import { Link } from "react-router-dom";
import usuario  from "../assets/usuario.png";

export const HomeAgente = () => {
  return (
    <div className="bodyAgente">
        <HeaderAgente/>
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
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <Link to="/EvaluationAgente">
                            <button>Ver</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <Link to="/EvaluationAgente">
                            <button>Ver</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <Link to="/EvaluationAgente">
                            <button>Ver</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <Link to="/EvaluationAgente">
                            <button>Ver</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <Link to="/EvaluationAgente">
                            <button>Ver</button>
                        </Link>
                    </div>
                </div>
            </li>
        </div>
    </div>
  );
};