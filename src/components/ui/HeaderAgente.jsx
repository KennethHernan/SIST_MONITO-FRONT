import "../../style/header.css";
import logo  from "../../assets/mtg.png";
import config  from "../../assets/config.png";
import notifi  from "../../assets/notifi.png";
import usuario  from "../../assets/usuario.png";
import { useAuth } from "../../hooks/useAuth";

export const HeaderAgente = () => {
    const { user } = useAuth();

    return (
        <header className="header">
            <div className="content-logo">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li>Calidad</li>
                </ul>
                <div className="content-header">
                    <div className="profile">
                      <p>{user.fullname}</p>
                      <div className="circle">
                        <img src={usuario} alt="logo"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="headerFoot">
                <ul>
                    <li className="activation">Notificaciones</li>
                    <li>Evaluaciones</li>
                </ul>
            </div>
        </header>
    );  
};