import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css';

function Entrar() {
    const navigate = useNavigate();

    // Função de navegação
    const handleClick = () => {
        console.log('Voltar clicado');
        navigate('/');
    };

    // Função de criação de usuário
    const criarUsuario = async () => {
        const user = document.getElementById("inputUser").value;
        const senha = document.getElementById("inputSenha").value;

        console.log('Tentando criar usuário:', user);

        if (user && senha) {
            const novoUsuario = {
                name: user,
                password: senha,
            };

            try {
                const resposta = await axios.post(
                    'http://localhost:3333/users', novoUsuario,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                console.log('Resposta do servidor ao criar usuário:', resposta);

                if (resposta.status === 201) {
                    alert("Conta criada!");
                }
            } catch (erro) {
                console.error("Erro ao criar conta:", erro);
                if (erro.response) {
                    // Resposta do servidor com erro
                    console.error("Erro resposta do servidor:", erro.response.data);
                } else if (erro.request) {
                    // A requisição foi feita, mas não obteve resposta
                    console.error("Erro na requisição:", erro.request);
                } else {
                    // Outro tipo de erro
                    console.error("Erro desconhecido:", erro.message);
                }
            }
        } else {
            console.log("Campos de usuário ou senha não preenchidos.");
        }
    };

    // Função de login
    const loginUsuario = async () => {
        const user = document.getElementById("user").value;
        const senha = document.getElementById("senha").value;

        console.log('Tentando fazer login com:', user);

        if (user && senha) {
            const loginData = { name: user, password: senha };

            try {
                const resposta = await axios.post('http://localhost:3333/users', loginData, {
                    headers: { "Content-Type": "application/json" },
                });
                console.log('Resposta do servidor ao tentar login:', resposta);

                if (resposta.status === 201) {
                    alert("Login realizado com sucesso!");
                    navigate('/homel'); // ou outra página de sucesso
                }
            } catch (erro) {
                console.error("Erro ao fazer login:", erro.response?.data || erro.message);
                alert(erro.response?.data.message || "Erro desconhecido");
            }
        } else {
            console.log("Campos de usuário ou senha não preenchidos.");
        }   
    };

    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        console.log('Alterando para', isSignUp ? 'login' : 'cadastro');
        setIsSignUp(!isSignUp);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.toggle("active");
    };

    const handleRegisterClick = () => {
        console.log('Acessando a tela de cadastro');
        setIsSignUp(true);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.add("active");
    };

    const handleLoginClick = () => {
        console.log('Acessando a tela de login');
        setIsSignUp(false);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.remove("active");
    };

    return (
        <div className='bodyEntrar'>
            <div className="containerEntrar" id="containerEntrar">
                <div className={`form-containerEntrar ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                    {isSignUp ? (
                        <form>
                            <h1>Cadastre-se</h1>
                            <input id="inputUser" type="text" placeholder="Digite seu nome de usuário" />
                            <input id="inputSenha" type="password" placeholder="Digite sua senha" />
                            <button onClick={(e) => { e.preventDefault(); criarUsuario(); }}>Faça cadastro</button>
                        </form>
                    ) : (
                        <form>
                            <h1>Faça Login</h1>
                            <input id="user" type="text" placeholder="Usuário" />
                            <input id="senha" type="password" placeholder="Senha" />
                            <button onClick={(e) => { e.preventDefault(); loginUsuario(); }}>Entrar</button>
                        </form>
                    )}
                </div>
                <div className="toggle-containerEntrar">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bem-vindo!</h1>
                            <p>Já tem um cadastro?</p>
                            <button className={isSignUp ? '' : 'hidden'} onClick={handleLoginClick}>Faça Login</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Olá!</h1>
                            <p>Não tem um login?</p>
                            <button className={!isSignUp ? '' : 'hidden'} onClick={handleRegisterClick}>Cadastre-se</button>
                        </div>
                    </div>
                </div>
            </div>
            <button id='voltar' onClick={handleClick}>Voltar</button>
        </div>
    );
}

export default Entrar;
