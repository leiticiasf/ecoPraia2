import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { Button } from "react-bootstrap";

const Registros = () => {
    const navigate = useNavigate(); 

    const voltar = () => {
        navigate('/mapa');
    };

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
        <br/>
        <Button onClick={voltar} className="pontosh1">Voltar</Button>
        <br/><br/>
        <h1 className="pontosh1">Lista de Pontos de Coleta</h1>
        <br/>
        <div className="pontos-container">
            {pontos.map((ponto, index) => (
                <div className="ponto-card" key={index}>
                    <p><strong>Endereço:</strong> {ponto.endereco}</p>
                    <p><strong>Complemento:</strong> {ponto.complemento}</p>
                    <p><strong>Descrição:</strong> {ponto.descricao}</p>
                </div>
            ))}
        </div>
      </div>
    );
};

export default Registros;
