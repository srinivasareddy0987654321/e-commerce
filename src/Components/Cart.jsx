import React from 'react'
import './Cart.css'
function Cart({mycart}) {
  return (
    <div>
      <div id='stylecart'>
      <div id='color'>
        <h1 >This is my Cart</h1>
      </div >
      <div>
        {mycart.length===0? (<div>Your Cart is empty</div>):
        (<div>{mycart.map((items)=>(
            <div>
                <h1>Product:{items.name}</h1>
                <img src={items.source} alt="" />
                
            </div>            
        ))}</div>)
      }
      </div>
      </div>
      
    </div>
  )
}

export default Cart
