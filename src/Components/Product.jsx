import React from 'react'
import './Product.css'
import main from './Main.jsx'
import Cart from './Cart.jsx'
function Product({props,changefunction}) {
  return (
    <div>
      <div id='product_main'>
        <div id='product_name'>

          <h1>{props.name}</h1>

        </div>

        <div id='product_image'>
          <img src={props.source} alt="" id='img'/>

        </div>
        <div id='button'>
          <button onClick={()=>changefunction(props)}>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}

export default Product
