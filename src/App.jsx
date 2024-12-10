import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import { useState } from "react"

function App() {

  let [cartItems , setCartItems] = useState([])

  function addToCart(product){

    setCartItems((prevCartItem) => {

      let hasIt = prevCartItem.find((item) => item.id === product.id )

      if(hasIt){
        return prevCartItem.map((a) => (a.id === product.id) ? {...a , quantity: a.quantity + 1} : a)
      }
      else{
        return [...prevCartItem , {...product , quantity: 1}];
      }
    })
  }

  function removeFromCart(id){
    setCartItems( (prevCartItem) => ( prevCartItem.filter( (a) => a.id != id )))
  }

  return (
    <main className="min-h-screen bg-gray-800 py-6 px-2 flex flex-col">

    <Header addToCart={cartItems}/>

      <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">

        <ProductList addToCartProp={addToCart}/>
        <Cart cartItemsProp={cartItems}  addToCart={addToCart} removeFromCart={removeFromCart}/>

      </div>
    </main> 
  )
}

export default App
