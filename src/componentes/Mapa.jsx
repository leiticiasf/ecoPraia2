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

  const verDetalhesPonto = (pontoId) => {
    navigate(`/ponto/${pontoId}`);
  };

  return (
    <div className="mapaBody">
      <Navbar className="topnav">
        <div className="navbar-btn">
          <Button onClick={handleClick}>Voltar</Button> &nbsp;
          <Button onClick={irPonto}>Adicionar Ponto</Button> &nbsp;
          <Button onClick={verPonto}>Visualizar Ponto</Button>
        </div>
      </Navbar>

      <Container className="mapaPagina">
        <h1>Pontos de coleta de resíduos em Florianópolis</h1>

        {/* Mapa*/}
        <div className="mapaWrapper">
          <img src={mapa} alt="Mapa de Florianópolis" className="mapaImagem" />

          {/* pontos*/}
          <div
            className="mapPoint"
            style={{ top: '30%', left: '40%' }}
            onClick={() => verDetalhesPonto(1)}
          ></div>
          <div
            className="mapPoint"
            style={{ top: '50%', left: '60%' }}
            onClick={() => verDetalhesPonto(2)}
          ></div>
          <div
            className="mapPoint"
            style={{ top: '22%', left: '58%'}}
            onClick={() => verDetalhesPonto(1)}
          ></div>
          <div
            className="mapPoint"
            style={{ top: '30%', left: '40%' }}
            onClick={() => verDetalhesPonto(1)}
          ></div>
        </div>

        {/* input*/}
        <div className="search-container">
          <input type="text" placeholder="Procurar ponto de coleta" name="search" />
          <button type="submit">Buscar</button>
        </div>
      </Container>
    </div>
  );
}

export default Mapa;
