import "../style/homeAuditor.css";
import { HeaderAuditor } from "../components/ui/HeaderAuditor";
import { Link } from "react-router-dom";
import buscar from "../assets/buscar.png";
import React, { useState, useEffect } from "react";
import { useAgents } from "../hooks/useAgents";

export const HomeAuditor = () => {
    const [dataAgents, setDataAgents] = useState([]);
  const { getAgents } = useAgents();

  useEffect(() => {
    onGetAgents();
  }, []);

  const onGetAgents = async () => {
  
      const response  = await getAgents();
      if (response) {
        setDataAgents(response);
        
      }
     
};
console.log(dataAgents)
  return (
    <div className="bodyAgente">
      <HeaderAuditor />
      <div className="content-title">
        <p>Reportes</p>
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
            </div>
          </form>
        </div>
      </div>
      <div className="content-table">
        <div className="tabe-info">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>AGENTE </td>
                <td>CAMPAÑA</td>
                <td>N° ENCUESTA</td>
                <td></td>
              </tr>
              <tr>
                <td>364242</td>
                <td>Jorge</td>
                <td>Entel</td>
                <td>0</td>
                <td>
                  <Link to="/Page2Auditor">
                    <button>Ver auditorias</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>804242</td>
                <td>Sebastian</td>
                <td>Entel</td>
                <td>10</td>
                <td>
                  <Link to="/Page2Auditor">
                    <button>Ver auditorias</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>804242</td>
                <td>Armando</td>
                <td>Entel</td>
                <td>10</td>
                <td>
                  <Link to="/Page2Auditor">
                    <button>Ver auditorias</button>
                  </Link>
                </td>
              </tr>
            </thead>
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
