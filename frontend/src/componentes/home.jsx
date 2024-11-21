import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Carousel, Row, Col, } from "react-bootstrap";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import banner from "../assets/floripa.jpg";
import projeto from "../assets/praia.jpg";
import Equipe from "./Equipe";
import { faWeight } from "@fortawesome/free-solid-svg-icons";



function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/users');
  };
  // informações do Sobre o projeto
  const data = [
    {
      id: 1,
      title: 'Quando nos foi passado o que seria a Situação de Aprendizado, tivemos acesso à uma ampla variedade de demandas a serem escolhidas, porém, o que mais nos chamou atenção foi a que pedia uma ação de reciclagem nas praias. ',
      image: projeto,
    },
    {
      id: 2,
      title: 'A ferramenta interativa foi criada com o objetivo de ser acessível a qualquer pessoa via smartphone ou computador, permitindo que usuários identifiquem com facilidade os pontos de coleta mais próximos. ',
      image: projeto,
    },
    {
      id: 3,
      title: 'Convidamos todos a explorar o mapa, compartilhar a iniciativa e contribuir para um futuro mais sustentável. Estamos confiantes de que, com o engajamento da comunidade, podemos preservar as belezas naturais da ilha para as próximas gerações!',
      image: projeto,
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <Navbar>
        <Container>
          {/* logo */}
          <Navbar.Brand href="#home">
            Eco Praia
          </Navbar.Brand>

          {/* navbar */}
          <Nav className="me-auto">
            <Nav.Link> <Link className="perfil" to="/perfil">Perfil</Link> </Nav.Link>
            <Nav.Link href="#projeto">Equipe</Nav.Link>
            <Nav.Link href="#features">Contato</Nav.Link>
            <Nav.Link href="#projeto">Projeto</Nav.Link>
          </Nav>

          {/* botao entrar */}
          <div className="navbar-btn">
            <Button type="button" variant="primary" onClick={handleClick}> Entrar
            </Button>
          </div>
        </Container>
      </Navbar>
      <br /><br /><br /><br />

      <section className="banner" id="home">
        <Container id="containerEntrar">

          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <h1 className="header-mapa" id="home">Nosso mapa </h1>
              <p>Durante a alta temporada e dias de calor, observa-se um aumento significativo no volume de resíduos nas áreas de trilha ao redor de Florianópolis. As paisagens paradisíacas se veem sobrecarregadas por detritos de diversos tipos: calçados, plásticos, embalagens de alimentos e papel descartado. </p>
              <p> O propósito deste mapa é fornecer uma visualização dos pontos de coleta de resíduos já identificados dentro da ilha de Floripa, com o intuito de reduzir o acúmulo de detritos e trazer a conscientização pública. </p>
              <p style={{ fontWeight: 'bold', color: '#007EA7' }}> Clique para ampliar o mapa e localize os pontos de coleta mais próximos de você!</p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <Link to="/mapa"> <img id="bannerMapa" src={banner} alt="Header img" /> </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />



      <section className="sobre" id="projeto">
        <Container id="inicio">
          <h1 className="header-sobre">Sobre o projeto</h1>
          <h2 className="subheader-sobre">Escolha de demanda</h2>
          <div className="conteudo-sobre">
            <Col xs={12} md={4} xl={4}>
              <img className="img-info" src={data[currentIndex].image} alt={data[currentIndex].title} />
            </Col>

            <Col xs={12} md={8} xl={8}>
              <h2 className="info">{data[currentIndex].title}</h2>
              <p>{data[currentIndex].content}</p>
              
              <div className="btn-sobre">
                <Button type="button" variant="primary" onClick={handleNext}>Próximo</Button>
              </div>
            </Col>
          </div>
        </Container>

        <br /><br /><br /><br />
      </section>

      <Equipe />



    </>

  );
}

export default Home;