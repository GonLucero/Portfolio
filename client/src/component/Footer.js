import React from "react"
import logo1 from "./pic/logo1.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img style={{marginLeft:"11vw"}} src={logo1} alt='' />
          </div>
          <p>© 2022. Todos los derechos reservados por Gonzalo Lucero.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
