import React from 'react'

function ProductList({addToCartProp}) {

    let list = [{ id:1 , name: "Product A" , price:25.00 , quantity:0 },
        {id:2 , name: "Product B" , price:40.00 , quantity:0},
        {id:3 , name: "Product C" , price:50.00 , quantity:0}
    ]


  return (
    <div className='w-full md:w-1/2 bg-gray-600 rounded-lg  p-6'>
        <h2 className='text-white text-2xl font-semibold mb-4'>Products</h2>

        <ul className='flex flex-col gap-y-4 *:gap-x-6'>

            {
                list.map( (a) => (
                <li key={a.id} className='flex items-center justify-between'>
                  <h3 className='text-white text-lg font-medium'>{a.name}</h3>
                  <p className='grow text-sm text-gray-400'>${a.price}</p>
                   <button onClick={() => addToCartProp({id:a.id , name:a.name , price:a.price , quantity:a.quantity})} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-semibold rounded'>
                    Add to Cart
                  </button>
                </li>
                ))
            }

        </ul>
    </div>
  )
}

export default ProductList
