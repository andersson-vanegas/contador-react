import React from 'react'
import './fondo.css'
import Counter from './Counter'


const Animado = () => {


  
return (

    <React.Fragment>  

 

  <div className="bg_animate">
  <div className="burbujas">
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <Counter/>

    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
    <div className="burbuja"></div>
</div>
  </div>
    </React.Fragment>
  
  )
}

export { Animado}