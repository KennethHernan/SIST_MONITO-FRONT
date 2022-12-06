import "../style/homeAuditor.css";
import { HeaderAuditor } from "../components/ui/HeaderAuditor";
import { Link } from "react-router-dom";
import buscar from "../assets/buscar.png";
import React, { useState, useEffect } from "react";
import { useAgents } from "../hooks/useAgents";

export const Page2Auditor = () => {
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
              <tr>
                <td>80727525</td>
                <td>Armando Pérez</td>
                <td>Banco Estado</td>
                <td>Sep 23 16:56, 2022</td>
                <td>
                  <Link to="/EvaluationAuditor">
                    <button>Ver</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>95727525</td>
                <td>Armando Pérez</td>
                <td>Cencosud</td>
                <td>Sep 14 12:46, 2022</td>
                <td>
                  <Link to="/EvaluationAuditor">
                    <button>Ver</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>60727525</td>
                <td>Armando Pérez</td>
                <td>CCU</td>
                <td>Sep 06 15:54, 2022</td>
                <td>
                  <Link to="/EvaluationAuditor">
                    <button>Ver</button>
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
