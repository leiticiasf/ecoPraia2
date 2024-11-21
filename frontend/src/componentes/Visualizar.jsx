import "./visualizar.css";
import mapa from "../assets/mapa.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import exemploMapa from "../assets/coleta.jpeg";

function Visualizar() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // 
  };

  const irPonto = () => {
    navigate('/ponto');
  };

  return (
    <div className="mapaBody">
      <Navbar className="topnav">
        <div className="navbar-btn">
          <div className="search-container">
            <button type="submit"></button>
          </div>
          <Button onClick={handleClick}>Voltar</Button>
          <Button onClick={irPonto}>Adicionar Ponto</Button>
        </div>
      </Navbar>

      <Container className="vslz">
        <h1>Praia de Canasvieiras</h1>

        {/* input */}
        <div className="search-containerr">
          <input type="text" placeholder="Procurar ponto de coleta" name="search" />
          <button type="submit">Buscar</button>
        </div>

        <img src={mapa} alt="Mapa de Florianópolis" id="visualizarMapa" />

        <div className="verPonto">
          <img id="imgexp" src={exemploMapa} alt="Ponto de coleta" />
          <p id="descricaoPonto">Ponto de coleta de vidro na praia de Canasvieiras</p>
          <h3 id="visu">Comentários</h3>

          <div id="addcoment">
            <textarea type="text" placeholder="Adicionar comentário"></textarea>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Visualizar;
