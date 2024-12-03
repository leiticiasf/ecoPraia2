import { Container, Navbar, Button } from "react-bootstrap";
import "./pontoDeColeta.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const PontoDeColeta = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const criarPontos = async () => {
        const nome = document.getElementById("inputNome").value;
        const endereco = document.getElementById("inputEndereco").value;
        const complemento = document.getElementById("inputComplemento").value;
        const descricao = document.getElementById("inputDescricao").value;

        if (nome && endereco && complemento && descricao) {
            const novoPonto = {
                name: nome,
                endereco: endereco,
                complemento: complemento,
                descricao: descricao,
            };

            try {
                const resposta = await axios.post(
                    'http://localhost:3333/pontoDeColeta',
                    novoPonto,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                if (resposta.status === 201) {
                    alert("Ponto de coleta criado com sucesso!");
                    navigate('/mapa')
                }
            } catch (erro) {
                console.error("Erro ao criar ponto:", erro);
                alert("Ocorreu um erro ao criar o ponto.");
            }
        } else {
            alert("Preencha todos os campos!");
        }
    };

    const voltar = () => {
        navigate("/");
    };

    return (
        <>
            <Navbar className="topnav">
                <div className="navbar-btn">
                    <Button onClick={voltar}>Voltar</Button> &nbsp;
                </div>
            </Navbar>
            <div className="adicionarPontos">
                <div id="addFoto">
                    <input
                        type="file"
                        id="pontoImg"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <br />
                    <br />
                    <br />
                </div>
                <input id="inputNome" type="text" placeholder="Nome da praia" />
                <br />
                <br />
                <input id="inputEndereco" type="text" placeholder="Endereço" />
                <br />
                <br />
                <input id="inputComplemento" type="text" placeholder="Complemento" />
                <br />
                <textarea
                    id="inputDescricao"
                    type="text"
                    placeholder="Faça uma breve descrição do ponto."
                />
                <br />
                <button id="botaoEnviar" onClick={criarPontos}>
                    Enviar
                </button>
            </div>
        </>
    );
};

export default PontoDeColeta;
