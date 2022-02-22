import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import linkedin from "../pic/linkedin.png"
import github from "../pic/github.png"
import gmail from "../pic/gmail.png"
import * as emailjs from 'emailjs-com';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    var template_params = {
      "name": data.fullname,
      "message": data.message,
      "phone": data.phone,
      "email": data.email,
      "subject": data.subject
   }

   console.log(template_params,"teplate")
 
  //   alert(
  //     `My name is ${data.fullname}. 
	// My phone number is ${data.phone}. 
	// My email address is ${data.email}. 
	// My Subject on  ${data.subject}. 
	// Here is my message I want to say : ${data.message}. 
	// `
  //   )

//     emailjs.send(
//       'gmail',
//       'template_hzdvc44',
//       template_params,
//       'user_6TwfT38V2JLHUD5ZZskaz'
//  )
emailjs.send('service_xljaqwg', 'template_hzdvc44', template_params, 'user_6TwfT38V2JLHUD5ZZskaz')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});



  setData({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  alert("Mail enviado Exitosamente!")
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACTO</h4>
            <h1>Contáctate Conmigo</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Gonzalo Martín Lucero Irazoqui</h1>
                 
                  <p>Teléfono Celular: +54 9 1134490811</p>
                  <p>Email: gonzalom.lucero@gmail.com</p> <br />
                  <p>Buenos Aires, Argentina</p> <br />
                  <span>ME PUEDES ENCONTRAR EN:</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <a href="https://www.linkedin.com/in/gon-lucero-js/">
                      <img style={{width:"4vw"}} src={linkedin}/>
                      </a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://github.com/GonLucero">
                    <img style={{width:"4vw"}} src={github} />
                    </a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="mailto:gonzalom.lucero@gmail.com">
                    <img style={{width:"4vw"}} src={gmail}/>
                    </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>TU NOMBRE</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>NUMERO DE TELÉFONO</span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>ASUNTO </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>TU MENSAJE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  ENVIAR MENSAJE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
