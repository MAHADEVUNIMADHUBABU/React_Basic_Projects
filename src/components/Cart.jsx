import React, {  useState } from 'react'

export default function Cart({cartItemsProp,addToCart,removeFromCart}) {

  function add(prod){
    addToCart(prod)
  }

  function remove(id){
    removeFromCart(id)
  }

  function decrease(id){

    cartItemsProp.map((a) =>{
      if( a.id === id){
        if(a.quantity === 1)  remove(id);
        else{
          removeFromCart(id);
          addToCart({...a , quantity:a.quantity-1})
        }
      }
    })
  }

  const total = cartItemsProp.reduce( (sum , item) =>{
    return sum += item.price * item.quantity
  } , 0)
  
  return (
    <div className='w-full md:w-1/2 bg-gray-600 gap-4 p-6 rounded-lg'>
      
      <h2 className='text-2xl text-white font-semibold mb-2'>Shopping Cart</h2>

      {
        (cartItemsProp.length === 0) ? 
        (<p className=' text-gray-400 mb-2'>cart is empty</p> )
        :
        (
          <ul>

            {
              cartItemsProp.map( (item) =>(
                <li key={item.id} className='flex justify-between items-center'>
  
                <div className='text-white'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-sm'>${item.price}x{item.quantity}</p>
                </div>
  
              <div className='flex items-center justify-between py-2 gap-2 text-white'>
  
                  <button onClick={() =>{add(item)}} className='bg-green-500 hover:bg-green-700 px-2 font-bold rounded'>
                      +
                  </button>
  
                  <button onClick={() =>{decrease(item.id)}} className='bg-amber-500 hover:bg-amber-700 px-2 rounded font-bold'>
                      -
                  </button>
  
                  <button onClick={() =>{remove(item.id)}} className='text-sm font-semibold bg-red-500 hover:bg-red-700 px-2 py-1 rounded'>
                      Remove
                  </button>
              </div>

              <p className='font-semibold text-green-600 text-xl'>${item.price*item.quantity}</p>
          </li> 
              )
              )
            }

          </ul>
        )
      }
      <h3 className='text-green-500 font-bold text-lg'>Total: ${total}</h3>
    </div>
  )
}
