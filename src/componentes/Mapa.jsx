import { Container, Navbar, Button } from "react-bootstrap";
import "./mapa.css";
import mapa from "../assets/mapa.png";
import { useNavigate } from "react-router-dom";

function Mapa() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const irPonto = () => {
    navigate('/ponto');
  };

  const verPonto = () => {
    navigate('/visualizar');
  };

  const verDetalhesPonto = () => {
    navigate('/visualizar');  // vai p pagina de visualizar
  };

  return (
    <div className="mapaBody">
      <Navbar className="topnav">
        <div className="navbar-btn">
          <Button onClick={handleClick}>Voltar</Button> &nbsp;
          <Button onClick={irPonto}>Adicionar Ponto</Button> &nbsp;
        </div>
      </Navbar>

      <Container className="mapaPagina">
        <h1>Pontos de coleta de resíduos em Florianópolis</h1>

        {/* Mapa */}
        <div className="mapaWrapper">
  <img src={mapa} alt="Mapa de Florianópolis" className="mapaImagem" />

  {/* Pontos */}
  <div
    className="mapPoint"
    style={{ top: '35%', left: '46%' }}
    onClick={verDetalhesPonto}
  >
    <div className="mapTooltip">Santo Antônio de Lisboa</div> {/* Texto do tooltip */}
  </div>

  <div
    className="mapPoint"
    style={{ top: '58%', left: '54%' }}
    onClick={verDetalhesPonto}
  >
    <div className="mapTooltip">Campeche</div>
  </div>

  <div
    className="mapPoint"
    style={{ top: '22%', left: '58%' }}
    onClick={verDetalhesPonto}
  >
    <div className="mapTooltip">Canasvieiras</div>
  </div>
</div>

        {/* Input */}
        <div className="search-container">
          <input type="text" placeholder="Procurar ponto de coleta" name="search" />
          <button type="submit">Buscar</button>
        </div>
      </Container>
    </div>
  );
}

export default Mapa;
