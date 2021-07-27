import React from "react";
import "./Page.css";
import javascript from "../../image/javascript1.png";
import node from "../../image/node.png";
import react from "../../image/react.png";
import redux from "../../image/redux.png";
import html from "../../image/html.png";
import postgres from "../../image/postgres.png";
import scrum from "../../image/scrum.png";
import proyect1 from "../../image/proyect1.png";
import proyect2 from "../../image/proyect2.png";
import proyect3 from "../../image/proyect3.png";
import proyect4 from "../../image/proyect4.png";




const Page = () => { 
    return ( 
        <div className="page">  
            <div className="pageHeader" id="inicio">
                <div>
                    <h1 className="pheaderTitle">SOY FULLSTACK DEVELOPER</h1>
                    <p className="pheaderText">
                        Mi nombre es Sebastián Ciare, tengo 21 años y soy de Argentina. Soy FullStack Developer con orientación al Front-End, me encuentro realizando proyectos con React (Web) en Front + Node y Express en Back, integrando equipos con metodología SCRUM y sistema de versiones GIT + GITHUB.
                    </p>
                    <a className="btn" href="https://github.com/Eduardo871">SABER MÁS</a>
                </div>
            </div>
            <div className="body" id="body">
                <div className="bodyOne">
                    <h1 className="bOneTitle"> EN BUSCA DE UN SUEÑO</h1>
                    <p>Me considero una persona responsable que nunca se rinde y siempre busca nuevos desafíos. Hoy me encuentro en la aventura mas grandiosa de todas "Conseguir un trabajo en IT", se que el camino no es nada fácil pero me estoy preparado para poder llegar hasta las estrellas. Espero que me puedas ayudar a cumplir el sueño de convertirme en un gran profesional de la industria del software  </p>
                    <a className="btn" href="https://linkedin.com/in/sebastianciare/">SABER MÁS</a>
                </div>
                <div className="bodyTwo">
                    <h1 className="bTwoTitle">MIS HABLIDIADES</h1>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={javascript} alt="" />
                        </div>
                        <div>
                            <h1>Javascript</h1>
                            <h2>lenguaje de programación</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={react} alt="" />
                        </div>
                        <div>
                            <h1>React</h1>
                            <h2>Framework de Javascript (frontend)</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={redux} alt="" />
                        </div>
                        <div>
                            <h1>Redux</h1>
                            <h2>Framework para la administración de estados</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={node} alt="" />
                        </div>
                        <div>
                            <h1>Node</h1>
                            <h2>Framework de Javascript (backend)</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={html} alt="" />
                        </div>
                        <div>
                            <h1>Html</h1>
                            <h2>lenguaje de marcado de hipertexto</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={postgres} alt="" />
                        </div>
                        <div>
                            <h1>PostgreSql</h1>
                            <h2>lenguaje administrador de bases de datos</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                    <div className="bTwoSkill">
                        <div className="bTskillImage">
                            <img src={scrum} alt="" />
                        </div>
                        <div>
                            <h1>Scrum</h1>
                            <h2>Metodología Agíl</h2>
                            <p>Javascript es un lenguaje de programación multiproposito que bla bla</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageFooter" id="footer">
                <h1>MIS PROYECTOS</h1>
                <div className="gallery">
                    <div className="columnOne">
                       <a href="https://github.com/Eduardo871/Landing-Page-Coca-Cola">
                        <img src={proyect1} alt="" />
                       </a>
                        <a href="https://github.com/Eduardo871/tip-tap-toe">
                          <img src={proyect2} alt="" />
                        </a>
                    </div>
                   <div className="columnTwo">
                        <a href="https://github.com/Eduardo871/Barber-Community">
                          <img src={proyect3} alt="" />
                        </a>
                        <a href="https://github.com/Eduardo871/deliveryApp">
                            <img src={proyect4} alt="" />
                            
                        </a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Page;