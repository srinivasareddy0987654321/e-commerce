import React from 'react'

function Cart({mycart}) {
  return (
    <div>
      <div>
        <h1>This is my Cart</h1>
      </div>
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
  )
}

export default Cart
