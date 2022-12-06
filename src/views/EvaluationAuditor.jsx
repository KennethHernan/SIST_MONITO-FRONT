import "../style/evaluation.css";
import { HeaderAuditor } from '../components/ui/HeaderAuditor';
import { Link } from "react-router-dom";
import usuario  from "../assets/usuario.png";
import audio  from "../assets/pipipAudio.mp4";

export const EvaluationAuditor = () => {
  return (
    <div className="bodyAgente">
        <HeaderAuditor/>
        <div className="content-title">
            <div>
                <p>Quality Evaluation</p>
            </div>
            <div>
             <Link to="/Page2Auditor">
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
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label class="label" for="file">Insertar Audio</label>
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
                            <form>
                                <div className="grafico-info">
                                    <div>
                                        <label>0</label>
                                    </div>
                                    <div>
                                        <label>5</label>
                                    </div>
                                </div>
                                <input type="range" id="rango1" min="0" max="5" step="1"/>
                            </form>
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
                            <form>
                                <div className="grafico-info">
                                    <div>
                                        <label>0</label>
                                    </div>
                                    <div>
                                        <label>5</label>
                                    </div>
                                </div>
                                <input type="range" id="rango1" min="0" max="5" step="1"/>
                            </form>
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
                            <form>
                                <div className="grafico-info">
                                    <div>
                                        <label>0</label>
                                    </div>
                                    <div>
                                        <label>5</label>
                                    </div>
                                </div>
                                <input type="range" id="rango1" min="0" max="5" step="1"/>
                            </form>
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