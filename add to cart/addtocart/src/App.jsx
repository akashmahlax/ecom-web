import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <ProductPage addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;