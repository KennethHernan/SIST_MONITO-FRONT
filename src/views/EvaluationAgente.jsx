import "../style/evaluation.css";
import { HeaderAgente } from '../components/ui/HeaderAgente';
import { Link } from "react-router-dom";
import usuario  from "../assets/usuario.png";
import audio  from "../assets/pipipAudio.mp4";

export const EvaluationAgente = () => {
  return (
    <div className="bodyAgente">
        <HeaderAgente/>
        <div className="content-title">
            <div>
                <p>Quality Evaluation</p>
            </div>
            <div>
             <Link to="/HomeAgente">
                <p>Regresar</p>
             </Link>
            </div>
        </div>
        <div className="content-body">
           <div className="content-profile">
                <div className="profile-img">
                    <img src={ usuario } alt="usuario" />
                </div>
                <div className="profile-description">
                    <p className="description-name">Armando Perez_Maj</p>
                    <div>
                        <p>#</p>
                        <p>364242</p>
                    </div>
                    <div>
                        <p>Agent:</p>
                        <p>Armando Pérez</p>
                    </div>
                    <div>
                        <p>Quality Score: </p>
                        <p>100%</p>
                    </div>
                    <div>
                        <p>Evaluated by:</p>
                        <p>Kenneth DeLaCuz_Rom</p>
                    </div>
                    <div>
                        <p>Auditor Id:</p>
                        <p>5006900004ppr6RAAQ</p>
                    </div>
                    <div>
                        <p>Auditor Fullname:</p>
                        <p>Kenneth De la Cruz</p>
                    </div>
                    <div>
                        <p>Created Date:</p>
                        <p>Sep 12 12:00, 2022</p>
                    </div>
                    <div>
                        <p>State: </p>
                        <p>Open</p>
                    </div>
                    <div>
                        <p>Campaign:</p>
                        <p>ENTEL PERSONAS</p>
                    </div>
                </div>
                <div className="profile-audio">
                    <audio src={ audio } controls> este es un elemento de audio no soportado por tu navegador, prueba con otro </audio>
                </div>
           </div>
           <div className="content-progress">
                <li>
                    <div className="progress-info">
                        <div className="info1">
                            <p>GREETING & CLOSING</p>
                        </div>
                        <div className="info2">
                            <p>Weight 75%</p>
                        </div>
                        <div className="info3">
                            <p className="plomo">100%</p>
                        </div>
                    </div>
                    <div className="progress-result">
                        <div className="result-info">
                            <div className="info4">
                                <p className="plomo">Experiencia - Ofrece un saludo cordial al cliente</p>
                            </div>
                            <div className="info5">
                                <div>
                                    <p>Group:</p>
                                </div>
                                <div>
                                    <p className="plomo">Experiencia</p>
                                </div>
                            </div>
                            <p>Si</p>
                        </div>
                        <div className="result-grafico">
                            <progress value="1" max="5"></progress>
                        </div>
                        <div className="result-pie">
                            <div>
                                <p className="plomo">5/5</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="progress-info">
                        <div className="info1">
                            <p>GREETING & CLOSING</p>
                        </div>
                        <div className="info2">
                            <p>Weight 100%</p>
                        </div>
                        <div className="info3">
                            <p className="plomo">100%</p>
                        </div>
                    </div>
                    <div className="progress-result">
                        <div className="result-info">
                            <div className="info4">
                                <p className="plomo">Experiencia - Ofrece un saludo cordial al cliente</p>
                            </div>
                            <div className="info5">
                                <div>
                                    <p>Group:</p>
                                </div>
                                <div>
                                    <p className="plomo">Experiencia</p>
                                </div>
                            </div>
                            <p>Si</p>
                        </div>
                        <div className="result-grafico">
                            <progress value="5" max="5"></progress>
                        </div>
                        <div className="result-pie">
                            <div>
                                <p className="plomo">5/5</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="progress-info">
                        <div className="info1">
                            <p>GREETING & CLOSING</p>
                        </div>
                        <div className="info2">
                            <p>Weight 30%</p>
                        </div>
                        <div className="info3">
                            <p className="plomo">100%</p>
                        </div>
                    </div>
                    <div className="progress-result">
                        <div className="result-info">
                            <div className="info4">
                                <p className="plomo">Experiencia - Ofrece un saludo cordial al cliente</p>
                            </div>
                            <div className="info5">
                                <div>
                                    <p>Group:</p>
                                </div>
                                <div>
                                    <p className="plomo">Experiencia</p>
                                </div>
                            </div>
                            <p>Si</p>
                        </div>
                        <div className="result-grafico">
                            <progress value="3" max="5"></progress>
                        </div>
                        <div className="result-pie">
                            <div>
                                <p className="plomo">5/5</p>
                            </div>
                        </div>
                    </div>
                </li>
                <div className="content-feedback">
                    <p>FeedBack:</p>
                    <p className="plomo">Buena gestión, felicitaciones a seguir el proceso correrto siempre. 🙌🙌🙌</p>
                </div>
                <div className="content-check">
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p>Signed On: </p>
                    </div>
                    <div>
                        <p className="plomo">Sep 12 12:00, 2022</p>
                    </div>
                </div>
                <div className="content-coment">
                    <div className="coment-header">
                        <div>
                            <p>Comment</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="coment-body">
                        <div className="body-area">
                            <textarea name="chat" id="chat" cols="200" rows="7"></textarea>
                        </div>
                        <div className="body-chat">
                            <form>
                                <input type="text" placeholder="Escribir..."/>
                                <div>
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div className="content-foot">
            <div className="foot-meta">
                <div>
                    <p className="plomo">Meta</p>
                </div>
                <div>
                    <p>80%</p>
                </div>
            </div>
            <div className="foor-puntuacion">
                <div>
                    <p className="plomo">PUNTUACIÓN DE QA</p>
                </div>
                <div>
                    <p>90%</p>
                </div>
            </div>
        </div>
    </div>
  );
};