import { useState } from "react";
import RecommendedItems from "../RecommendedItems/RecommendedItems";
import TodaysDeals from "../TodaysDeals/TodaysDeals";
import logo1 from './Images/cart-logo.png'

const Cart = ({fetchCartProducts , setCartProducts}) => {

    // Remove cart item
    const [removeMessage, setRemoveMessage] = useState(false);

    const removeCartItem = async (prodId) => {
    try {
        const response = await fetch(`https://api.chec.io/v1/carts/cart_zkK6oLWDG6wXn0/items/${prodId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": "pk_56071358605a875a29428978ff87f7f139cafebdd5046",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id: "cart_zkK6oLWDG6wXn0",
            id: prodId
        })
        });
        // Fetch updated cart data
        const data = await response.json();
        setCartProducts(data);
        setRemoveMessage(true);
    } catch (error) {
        console.error('Error removing item from the cart', error);
    } finally{
        setTimeout(() =>{
        setRemoveMessage(false);
        },2500)
    }
    };

    //calculating total price
    let cartTotalPrice = 0;
    for(let i of fetchCartProducts){
        cartTotalPrice += i.quantity * i.price.raw
    }
    
    return ( 
        <div>
            <h6 style={{textAlign:'center',borderBottom:'1px solid lightgray',color:'#5892b1'}} className="container fw-bold fs-3 pt-3">Cart Items<img src={logo1} height={45}/></h6>
            {
                fetchCartProducts.length === 0 ? (
                    <div className='d-flex flex-column justify-content-center  fs-5 fw-normal  cart-empty opacity-50' style={{height:'15vh',textAlign:'center'}}>cart is empty</div>
                ):
                fetchCartProducts?.map((c) =>{
                    return (
                        <>
                            <div>
                                {removeMessage && (
                                    <div className="text-bg-danger p-2 rounded-5 position-fixed z-3" style={{right: "1%", top: "12%"}}>
                                        Item removed successfully
                                    </div>
                                )}
                                <div style={{textAlign:'center',borderBottom:'1px solid lightgray'}} className='container d-flex flex-wrap justify-content-center pt-2 pb-3'>
                                    <div className='col-1'>
                                        <img src={c.image.url}height={60}/>
                                    </div>
                                    <div  className='col-5'>
                                        <h6 className='pt-3 ps-2'>{c.name}</h6>
                                    </div>
                                    <div className='col pt-3 fw-semibold'>
                                        Quantity - {c.quantity}
                                    </div>
                                    <div className='col-2'>
                                        <button className='btn btn-danger mt-2 fw-semibol' onClick={()=>removeCartItem(c.id)}>Remove</button>
                                    </div>
                                    <div className='col pt-3'>
                                        <span className="fw-semibold">₹ {c.quantity * c.price.raw}</span>
                                    </div>
                                </div>                    
                            </div>
                        </>      
                    )  
                })
            }
            {
                fetchCartProducts.length <= 0 ?'':(
                    <div className="container d-flex justify-content-end"> 
                        <span className="fw-bold fs-5 text-success">Total Price : ₹ {cartTotalPrice}</span>  
                    </div>
                )
            }
            <TodaysDeals/>
            <RecommendedItems/>
        </div>
     );
}
 
export default Cart;