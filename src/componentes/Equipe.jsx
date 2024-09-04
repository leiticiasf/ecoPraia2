import React from "react";
import './equipe.css';
import sobremim1 from "../assets/leticia.jpg";
import sobremim2 from "../assets/sofia.jpg"
import sobremim3 from "../assets/livia.jpg"
import sobremim4 from "../assets/lara.jpg"
import sobremim5 from "../assets/francisco.jpg"

import { Container } from "react-bootstrap";
function Equipe() {
    return(
        <>
        
        <h1 className="equipe-header">Conheça a Nossa Equipe!</h1>
        <br/><br/><br/>
                <Container className="leticao">
                <img id="imgleticia" src={sobremim1}/>
                <div className="esquerda">
                <h1>Letícia Ferreira</h1> 
                <h3> Backend, Front-end e Design</h3>   
                <p className="paragrafo-esquerda">Olá! Eu sou a líder da equipe, me chamo Letícia, sou natural de Brasília e tenho 17 anos. Este é o meu primeiro projeto grande na área de TI, do qual está servindo de grande aprendizado para mim. No EcoPraia eu trabalhei em todas as áreas, desde o levantamento das Regras de Negócio até o Backend, além de também auxiliar meus colegas.</p>  
                </div>
                </Container>
                <br/><br/><br/><br/><br/><br/><br/>

                <Container className="sofia">
                <img id="imgsofia" src={sobremim2}/>
                <div className="direita">
                <h1>Sofia Nimet</h1> 
                <h3>Front-end e Design</h3>   
                <p className="paragrafo-direita">Me chamo Sofia, tenho 17 anos. Por ser nascida em Florianópolis estou bem familiarizada com obstáculos que estamos presenciando em nossas praias, o que fez o projeto Ecopraia de meu interesse. Estou aprendendo muito no processo, atuando no levantamento de requisitos e estruturação da plataforma.</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="livia">
                <img id="imglivia" src={sobremim3}/>
                <div className="esquerda">
                <h1>Lívia Derks</h1> 
                <h3>Front-end e Design</h3>   
                <p className="paragrafo-esquerda">Oi! Meu nome é Lívia, tenho 17 anos e vivo em Florianópolis. No EcoPraia, estou atuando em toda sua estrutura de design, desde sua prototipagem até o desenvolvimento do Front-End. Participar desse projeto me proporcionou um amplo conhecimento sobre UX/UI Design, já que são tópicos tão importantes quanto a ideia do site.</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="lara">
                <img id="imglara" src={sobremim4}/>
                <div className="direita">
                <h1>Lara Drews</h1> 
                <h3>Analista de requisitos e Design</h3>   
                <p className="paragrafo-direita">Prazer! Me chamo Lara, tenho 17 anos e sou uma das desenvolvedoras desse projeto. Colaborei para fazer a análise de requisitos e a prototipagem inicial do site. Esse é meu primeiro projeto que abro ao público e espero poder publicar outros</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="francisco">
                <img id="imgfran" src={sobremim5}/>
                <div className="esquerda">
                <h1>Francisco Gasperini</h1> 
                <h3>Analista de requisitos e Design</h3>   
                <p className="paragrafo-esquerda"> Muito prazer! Me chamo Francisco, tenho 17 anos e estou atuando como designer nesse projeto.
Escolhi atuar nele pois a ideia me atraiu muito, visto que trabalha com um tópico tão importante e sensível do nosso dia a dia, que é a reciclagem e conscientização.</p>  
                </div>
                </Container>

                
        </>
    )
}   

export default Equipe;