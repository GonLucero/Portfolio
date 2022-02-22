import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import js from "../pic/js.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import react from "../pic/react.png"
import express from "../pic/express.png"
import redux from "../pic/redux.png"
import node from "../pic/node.png"
import css from "../pic/css.png"
import python from "../pic/python.png"
import html from "../pic/html.png"
import postgresql from "../pic/postgresql.png"
import reactnative from "../pic/react-native.png"
import socket from "../pic/socket.png"
import sequelize from "../pic/sequelize.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Bienvenid@</h3>
            <h1>
              Hola, soy <span>Gonzalo Lucero</span>
            </h1>
            <h2>
              <span>
                <Typewriter words={[" Desarrollador Full Stack.", " Programador Profesional."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Nací el 8 de Noviembre de 1995 en Buenos Aires, Argentina y soy apasionado por la tecnología desde que tengo memoria. A lo largo de mi vida laboral me he encontrado con muchos retos, y ser autodidacta me ha ayudado a resolverlos. Trabajar en equipo y buscar el éxito grupal, es algo que considero muy importante, aunque nunca descarto algún reto personal. Como desarrollador soy creativo, organizado y metódico, me adapto fácilmente ante cambios y estoy abierto a aprender nuevas tecnologías y lenguajes.</p>

            <div className='hero_btn d_flex'>
              {/* <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div> */}
              <div className='col_1'>
                <h4>HABILIDADES</h4>
                <div style={{marginBottom:"5vh"}}>
                <button className='btn_shadow' title="JavaScript">
                  <img src={js} alt='JavaScript'  />
                </button>
                <button className='btn_shadow' title="TypeScript">
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow' title="Python">
                  <img src={python} alt='' />
                </button>
                <button className='btn_shadow' title="React.js">
                  <img src={react} alt='' />
                </button>
                <button className='btn_shadow'title="Redux.js">
                  <img src={redux} alt='' />
                </button>
                <button className='btn_shadow' title="NodeJS">
                  <img src={node} alt='' />
                </button>
                <button className='btn_shadow' title="React Native EXPO">
                  <img src={reactnative} alt='' />
                </button>
                </div>
                <button className='btn_shadow' title="CSS3">
                  <img src={css} alt='' />
                </button>
                <button className='btn_shadow' title="HTML5">
                  <img src={html} alt='' />
                </button>     
                <button className='btn_shadow' title="PostgreSQL">
                  <img src={postgresql} alt='' />
                </button>
                <button className='btn_shadow' title="Express.js">
                  <img src={express} alt='' />
                </button>
                <button className='btn_shadow' title="Sequelize">
                  <img src={sequelize} alt='' />
                </button>           
                <button className='btn_shadow' title="Socket-IO">
                  <img src={socket} alt='' />
                </button>
                <button className='btn_shadow' title="Figma">
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
