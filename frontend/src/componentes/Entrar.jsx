import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Entrar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    const criarUsuario = async () => {
        const user = document.getElementById("inputUser").value;
        const senha = document.getElementById("inputSenha").value;

        if(user && senha) {
            const novoUsuario = {
                name: user,
                password: senha,
            };

            try{
                const resposta = await axios.post(
                    'http://localhost:3333/users', novoUsuario,
                    {
                        headers: {"Content-Type": "application/json"},
                    }
                );
                if(resposta.status === 201){
                    alert("Conta criada!")
                }
            }catch(erro){
                console.error("Erro ao criar conta:", erro);
            }
        }else{
                alert("Preencha todos os campos!")
            }
        };

        const loginUsuario = async () => {
            const user = document.getElementById("user").value;
            const senha = document.getElementById("senha").value;
        
            if (user && senha) {
                const loginData = { name: user, password: senha };
        
                try {
                    const resposta = await axios.post('http://localhost:3333/users', loginData, {
                        headers: { "Content-Type": "application/json" },
                    });
        
                    if (resposta.status === 200) {
                        alert("Login realizado com sucesso!");
                        navigate('/'); // ou outra página de sucesso
                    }
                } catch (erro) {
                    console.error("Erro ao fazer login:", erro);
                    alert("Usuário ou senha incorretos.");
                }
            } else {
                alert("Preencha todos os campos de login!");
            }
        };
      

    
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.toggle("active");
    };

    const handleRegisterClick = () => {
        setIsSignUp(true);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.add("active");
    };

    const handleLoginClick = () => {
        setIsSignUp(false);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.remove("active");
    };

    return (
        <div className='bodyEntrar'>
        <div className="containerEntrar" id="containerEntrar">
            <div className={`form-containerEntrar ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                {/* Conteúdo de tudooo */}
                {isSignUp ? (
                        <form>
                            {/* Lado de cadastro */}
                            <h1>Cadastre-se</h1>
                            
                            {/* inputs */}
                            <input id="inputUser" type="text" placeholder="Digite seu nome de usuário" />
                            <input id="inputSenha" type="password" placeholder="Digite sua senha" />
                            <button onClick={(e) => { e.preventDefault(); criarUsuario(); }}>Faça cadastro</button>
                        </form>
                ) : (
                    <form>

                      
                        {/* Lado de login */}
                        <h1>Faça Login</h1>

                        {/* inputs */}
                        <input id="user" type="text" placeholder="Usuário" />
                        <input id="senha" type="password" placeholder="Senha" />
                        <button  onClick={(e) => { e.preventDefault(); loginUsuario(); }}>Entrar</button>
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
