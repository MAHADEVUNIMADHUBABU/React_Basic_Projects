import React from 'react'

function Header({addToCart}) {

  const count = addToCart.reduce(( sum , item) => {
    return sum += item.quantity;
  } , 0)

  return (
      <header className='bg-gray-600 gap-4 py-6 px-4 rounded-lg flex items-center justify-between'>

        <h1 className='flex text-2xl text-white font-semibold'>Shopping Cart</h1>

        <label className='rounded-lg bg-amber-500 font-semibold py-2 px-4 text-white'> {count} Items</label>

      </header>
  )
}

export default Header
