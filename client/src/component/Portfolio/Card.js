import React, { useState } from "react"
import ReactPlayer from 'react-player'
import github from '../pic/github2.png'


const Card = (props) => {
  console.log(props,"props")
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
        <div>
        {/* <ReactPlayer
          url='https://cdnb.20m.es/sites/76/2019/10/De-d%C3%B3nde-surge-decir-que-algo-f%C3%A1cil-de-conseguir-est%C3%A1-%E2%80%98a-huevo%E2%80%99.jpg'
          className='react-player'
          playing
          controls="true"
          width='100%'
          height='35vh'
        /> */}
        {
          props.button === "true"
       ? <img src={props.image}/>
       : <img style={{width:"15vw", marginLeft:"13vw"}} src={props.image}/>
        } 
        
      </div>  
          {/* <img src={props.image} alt='' onClick={toggleModal} /> */}
        </div>
        <div className='category d_flex'>
          <span >{props.category}</span>
          <label >
          <button className='btn_shadow2'>
                      <a href={props.git} target="_blank">
                    <img style={{width:"4vw"}} src={github}/>
                    </a>
                    </button>
          </label>
        </div>
        <div className='title'>
          <h2>{props.title}</h2>
          <a href='#popup' className='arrow'>
            <i class='fas fa-arrow-right'></i>
          </a>
        
        </div>
        { props.button === "true"
          ? <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
        <button className='btn_shadow'>
        <a style={{fontSize:"1vw", fontWeight:"bold"}} href={props.web} target="_blank">Visitar Web</a>
        </button>
        </div>
        : <div></div>
}
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow'>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
