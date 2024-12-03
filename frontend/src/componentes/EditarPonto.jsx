import { Navbar, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

function EditarPonto() {
    const navigate = useNavigate();
    const { id } = useParams(); // Pegando o ID do ponto a ser editado

    const [ponto, setPonto] = useState({
        nome: "",
        endereco: "",
        complemento: "",
        descricao: ""
    });

    // Função para voltar para a página de registros
    const voltar = () => {
        navigate("/registros");
    };

    // Carregar os dados do ponto a ser editado
    useEffect(() => {
        console.log("ID do ponto a ser editado:", id); // Log do ID para depuração
        const pegarPonto = async () => {
            try {
                const resposta = await axios.get(`http://localhost:3333/pontoDeColeta/${id}`);
                setPonto(resposta.data); // Preenche o estado com os dados do ponto
            } catch (erro) {
                console.error("Erro ao buscar o ponto:", erro);
            }
        };
        pegarPonto();
    }, [id]);

    // Função para salvar as alterações
    const enviar = async () => {
        const { nome, endereco, complemento, descricao } = ponto;

        if (nome && endereco && complemento && descricao) {
            const pontoAtualizado = {
                nome,
                endereco,
                complemento,
                descricao
            };

            try {
                const resposta = await axios.put(
                    `http://localhost:3333/pontoDeColeta/${id}`,
                    pontoAtualizado,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                if (resposta.status === 200) {
                    alert("Ponto de coleta editado com sucesso!");
                    navigate("/registros"); // Redireciona para a página de registros
                }
            } catch (erro) {
                console.error("Erro ao editar o ponto:", erro);
                alert("Ocorreu um erro ao editar o ponto.");
            }
        } else {
            alert("Preencha todos os campos!"); // Validação se todos os campos estão preenchidos
        }
    };

    // Função para atualizar o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPonto(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <Navbar className="topnav">
                <div className="navbar-btn">
                    <Button onClick={voltar}>Voltar</Button>
                </div>
            </Navbar>

            <div className="adicionarPontos">
                <br />
                <input
                    name="nome"
                    id='inputNome'
                    value={ponto.nome}
                    onChange={handleChange}
                    type="text"
                    placeholder="Nome do ponto"
                    className="inputPonto"
                />
                <br />
                <input
                    name="endereco"
                    id='inputEndereco'

                    value={ponto.endereco}
                    onChange={handleChange}
                    type="text"
                    placeholder="Endereço"
                    className="inputPonto"
                />
                <br />
                <input
                    name="complemento"
                    id='inputComplemento'

                    value={ponto.complemento}
                    onChange={handleChange}
                    type="text"
                    placeholder="Complemento"
                    className="inputPonto"
                />
                <br />
                <textarea
                    name="descricao"
                    id='inputDescricao'

                    value={ponto.descricao}
                    onChange={handleChange}
                    placeholder="Descrição"
                    className="textareaPonto"
                />
                <br />
                <button className="editarPonto" onClick={enviar}>Salvar</button>
            </div>
        </>
    );
}

export default EditarPonto;
