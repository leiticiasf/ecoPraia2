import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { Button } from "react-bootstrap";
const Registros = () => {

    const navigate = useNavigate(); 

    const voltar = () => {
        navigate('/mapa')
    }
  const [pontos, setPontos] = useState([]); 

  async function pegarPontos() {
    try {
      const resposta = await axios.get("http://localhost:3333/pontoDeColeta");
      setPontos(resposta.data); 
    } catch (erro) {
      console.error("Erro ao buscar os pontos:", erro);
    }
  }

  useEffect(() => {
    pegarPontos();
  }, []);

  return (
    <div>
      <h1>Lista de Pontos de Coleta</h1>
      <Button onClick={voltar}>Voltar</Button>
      <ul>
        {pontos.map((ponto, index) => (
          <li key={index}>{JSON.stringify(ponto)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Registros;