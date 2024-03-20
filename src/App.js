import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products';
import ProductContext from './Components/Context/ProductContext';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import CategoryData from './Components/Category/CategoryData';
import Cart from './Components/Cart/Cart';

function App() {

  const [textBoxInput,setTextBoxInput] = useState('');

  //callback function for user input
  const searchTextCB = (text) =>{
    setTextBoxInput(text);
  }

  //store cart products
  const [cartProducts ,setCartProducts] = useState([]);

  //add to cart

  const [addMessage, setAddMessage] = useState(false);

  const addTocart = async (prodId) => {
    try {
      const response = await fetch("https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0", {
        method: "POST",
        headers: {
            "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": prodId,
            quantity: 1
        })
    })
        const data = await response.json();
        setCartProducts(data);
        setAddMessage(true);
        
    } catch (error) {
        console.error('An error occurred:', error);
    } finally{
      setTimeout(() =>{
        setAddMessage(false);
      },2500)
    }
};

const [fetchCartProducts ,setFetchCartProducts] = useState([]);

//fetching cart products
useEffect(()=>{
  const fetchingCartProducts = async () => {
    try {
      const response = await fetch("https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0", {
        method: "GET",
        headers: {
            "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
        const data = await response.json();
        setFetchCartProducts(data.line_items);
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

fetchingCartProducts();
},[cartProducts]);


  return (
    <> 
      <Header searchTextCB={searchTextCB} cartProducts={cartProducts}/>
      <ProductContext>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products textBoxInput={textBoxInput}/>}/>
          <Route path='/Products/:ProductId' element={<ProductDetails addTocart={addTocart} addMessage={addMessage}/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='*' element={<Notfound/>}/>
          <Route path='/Categories/:catId' element={<CategoryData textBoxInput={textBoxInput}/>}/>
          <Route path='/Cart' element={<Cart fetchCartProducts={fetchCartProducts} setCartProducts={setCartProducts}/>}/>
        </Routes>
      </ProductContext>
      <Footer/>
    </>
  );
}

export default App;
