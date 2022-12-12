import "../style/evaluation.css";
import { HeaderAuditor } from "../components/ui/HeaderAuditor";
import { Link, useNavigate } from "react-router-dom";
import usuario from "../assets/usuario.png";
import audio from "../assets/pipipAudio.mp4";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { dataStoreSelectedAgent } from "../store/storeAgent";
import { useState } from "react";
import { useAudit } from "../hooks/useAudit";
import { useAuth } from "../hooks/useAuth";

export const EvaluationAuditor = () => {
  const params = useParams();
  const [dataStoreAgent, setDataStoreAgent] = useAtom(dataStoreSelectedAgent);
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(dataStoreAgent);

  const dataInterfaceAudit = {
    audio_url: "asd",
    feedback: "",
    score1: "",
    score2: "",
    score3: "",
    survey: {
      idSurvey: params.id,
    },
    auditor: {
      idAuditor: user.idAuditor,
    },
  };

  const [dataAudit, setDataAudit] = useState(dataInterfaceAudit);
  const { sendAudit } = useAudit();

  const createAudit = async () => {
    const send = await sendAudit(dataAudit);
  };

  return (
    <div className="bodyAgente">
      <HeaderAuditor />
      <div className="content-title">
        <div>
          <p>Quality Evaluation</p>
        </div>
        <div>
          <Link to={`/Page2Auditor/${dataStoreAgent.idAgent}`}>
            <p>Regresar</p>
          </Link>
        </div>
      </div>
      <div className="content-body">
        <div className="content-profile">
          <div className="profile-img">
            <img src={usuario} alt="usuario" />
          </div>
          <div className="profile-description">
            <p className="description-name">Armando Perez_Maj</p>
            <div>
              <p>#</p>
              <p>{params.id}</p>
            </div>
            <div>
              <p>Agent:</p>
              <p>{dataStoreAgent.fullname}</p>
            </div>
            <div>
              <p>Created Date:</p>
              {dataStoreAgent?.surveys
                ?.filter((survey) => survey.idSurvey == params.id)
                .map((survey) => {
                  return <p key={survey.idSurvey}>{survey.createdAt}</p>;
                })}
            </div>
            <div>
              <p>Campaign:</p>
              <p>{dataStoreAgent.campaign}</p>
            </div>
          </div>
          <div className="profile-audio">
            <div className="profile-audio">
              <audio src={audio} controls>
                {" "}
                este es un elemento de audio no soportado por tu navegador,
                prueba con otro{" "}
              </audio>
            </div>
          </div>
        </div>
        <form onSubmit={createAudit}>
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
                    <p className="plomo">
                      Experiencia - Ofrece un saludo cordial al cliente
                    </p>
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
                  <div className="grafico-info">
                    <div>
                      <label>0</label>
                    </div>
                    <div>
                      <label>5</label>
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      setDataAudit({ ...dataAudit, score1: e.target.value });
                    }}
                    type="range"
                    id="rango1"
                    min="0"
                    max="5"
                    step="1"
                  />
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
                    <p className="plomo">
                      Experiencia - Ofrece un saludo cordial al cliente
                    </p>
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
                  <div className="grafico-info">
                    <div>
                      <label>0</label>
                    </div>
                    <div>
                      <label>5</label>
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      setDataAudit({ ...dataAudit, score2: e.target.value });
                    }}
                    type="range"
                    id="rango1"
                    min="0"
                    max="5"
                    step="1"
                  />
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
                    <p className="plomo">
                      Experiencia - Ofrece un saludo cordial al cliente
                    </p>
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
                  <div className="grafico-info">
                    <div>
                      <label>0</label>
                    </div>
                    <div>
                      <label>5</label>
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      setDataAudit({ ...dataAudit, score3: e.target.value });
                    }}
                    type="range"
                    id="rango1"
                    min="0"
                    max="5"
                    step="1"
                  />
                </div>
                <div className="result-pie">
                  <div>
                    <p className="plomo">5/5</p>
                  </div>
                </div>
              </div>
            </li>
            <div className="content-coment">
              <div className="coment-header">
                <div>
                  <p>Comment</p>
                </div>
                <div></div>
              </div>
              <div className="coment-body">
                <div className="body-area">
                  <p>FeedBack:</p>
                  <textarea
                    onChange={(e) => {
                      setDataAudit({ ...dataAudit, feedback: e.target.value });
                    }}
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                  />
                </div>
                <div className="body-chat">
                  <div>
                      <button type="sumbit">ENVIAR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
