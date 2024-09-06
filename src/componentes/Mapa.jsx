import { Container, Navbar, Button } from "react-bootstrap";
import "./mapa.css"
import mapa from "../assets/mapa.png"
import { useNavigate, Link   } from "react-router-dom";

function Mapa(){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    const irPonto = () => {
        navigate('/ponto');
    };

    const verPonto = () => {
        navigate('/visualizar');
    }
    return(
        <div className="mapaBody">            
            <Navbar className="topnav">
                <div className="navbar-btn">
                    <div className="search-container">
                        <input type="text"  placeholder="Procurar ponto de coleta" name="search"/>
                        <button type="submit"></button>
                    </div>
                    <Button onClick={handleClick}> Voltar  </Button>  &nbsp;
                    <Button onClick={irPonto}> Adicionar Ponto  </Button>  &nbsp;
                    <Button onClick={verPonto}>Visualizar Ponto</Button>
                </div>
            </Navbar>
      <Container className="mapaPagina">
        <h1>Pontos de coleta de resíduos em Florianópolis</h1>

             
        </Container>

        </div>
    )
}

export default Mapa;