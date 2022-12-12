import "../style/homeAuditor.css";
import { HeaderAuditor } from "../components/ui/HeaderAuditor";
import { Link } from "react-router-dom";
import buscar from "../assets/buscar.png";
import React, { useState, useEffect } from "react";
import { useAgents } from "../hooks/useAgents";
import { useParams } from "react-router-dom";
import { useAudit } from "../hooks/useAudit";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { dataStoreSelectedAgent } from "../store/storeAgent";

export const Page2Auditor = () => {
  const [dataStoreAgent, setDataStoreAgent] = useAtom(dataStoreSelectedAgent);
  const [dataSurvey, setDataSurvey] = useState([]);
  const { getSurveyAgentByID } = useAudit();
  const { getAgentById } = useAgents();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAgent();
    listSurvey();
  }, []);

  const getAgent = async () => {
    const response = await getAgentById(Number(params.id));

    if (response) {
      setDataStoreAgent(response);
    }
  };

  const listSurvey = async () => {
    const response = await getSurveyAgentByID(Number(params.id));
    console.log(response);

    if (response) {
      setDataSurvey(response);
    }
  };

  return (
    <div className="bodyAgente">
      <HeaderAuditor />
      <div className="content-title">
        <div>
          <p>Reportes</p>
        </div>
        <div>
          <Link to="/HomeAuditor">
            <p>Regresar</p>
          </Link>
        </div>
      </div>
      <div className="content-busqueda">
        <div className="busqueda-main">
          <form>
            <div>
              <input type="text" placeholder="Buscar por ID" />
              <button type="submit">
                <img src={buscar} alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="busqueda-filtro">
          <form>
            <div className="filtro-head">
              <div>
                <p>Filtro</p>
              </div>
              <input type="submit" value="BUSCAR FILTRO" />
            </div>
            <div className="filtro-foot">
              <div className="foot-campaña">
                <select>
                  <option value="1">Banco Estado</option>
                  <option value="1">Cencosud</option>
                  <option value="1">CCU</option>
                </select>
              </div>
              <div className="foot-fecha">
                <input type="date" />
                <button type="submit">
                  <img src={buscar} alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="content-table">
        <div className="tabe-info">
          <table>
            <thead>
              <tr>
                <td>SURVEY ID</td>
                <td>AGENTE </td>
                <td>CAMPAIGN</td>
                <td>FECHA DE CREACIÓN</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {dataSurvey.map((survey) => {
                return (
                  <tr key={survey.idSurvey}>
                    <td>{survey.idSurvey}</td>
                    <td>{dataStoreAgent.fullname}</td>
                    <td>{dataStoreAgent.campaign}</td>
                    <td>{survey.createdAt}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(`/EvaluationAuditor/${survey.idSurvey}`);
                        }}
                        className="audit-button"
                      >
                        Auditar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="content-tabla-foot">
          <div>
            <p>1</p>
          </div>
          <p>Mostrando 1 de 1</p>
        </div>
      </div>
    </div>
  );
};
