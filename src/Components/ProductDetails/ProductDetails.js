import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ProductDetails.css';
import RecommendedItems from "../RecommendedItems/RecommendedItems";
import freeDelivery from './Images/free-delivery.png';

const ProductDetails = ({addTocart , addMessage}) => {

    const {ProductId} = useParams();

    const navigate = useNavigate();
    
    const [prodData , setProdData] = useState({});
   
    //fetching single product
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.chec.io/v1/products/'+ProductId, {
                    method: "GET",
                    headers: {
                        'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046'
                    }
                });
                const data = await response.json();
                setProdData(data);
                // console.log('cheking',data);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchData();
    }, [ProductId]);

    //removing tags from product description
    function removeTags(input) {
        return input?.replace(/<\/?[^>]+(>|$)/g, "");
    }
    const productDescription = removeTags(prodData.description);

    return (  
        <>
        <div className="d-flex justify-content-center">
            {addMessage && (
                    <div className="text-bg-success p-2 rounded-5 position-fixed z-3" style={{right: "1%", top: "12%"}}>
                        Item added successfully
                    </div>
            )}
            {prodData && prodData.image ? (
                
        <div className='container prodDetail-container mt-5 mb-5'>
            <div className='row'>
                <div className='col'>
                    <button className="btn bg-transparent " onClick={() => {navigate(-1)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="blue" className="bi bi-arrow-left fw-bolder" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>           
                    </button>
                </div>
                <div className='col-6 d-flex gap-4'>
                    <img src={prodData.image?.url} alt='product image' width={500} height={500}/>
                </div>
                <div className='col-5'>
                    <div>
                        <span className='fw-bold fs-1'>{prodData.name}</span>
                    </div>
                    <div>
                        <span className='text-danger fs-5 text-uppercase fw-bold'>{prodData.categories[0]?.name}</span>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <span className='text-secondary'>{productDescription}</span>
                    </div>
                    <div>
                        <span className='fw-bold fs-1 text-success'><sup>₹</sup>{prodData.price.formatted} <del className='text-secondary fs-5 fw-normal'>₹{prodData.price.raw+1000}</del></span>
                    </div>
                    <div>
                        <span className='fs-4 text-danger fw-bold'>Save 30%</span>
                    </div>
                    <div>
                        <span>Free delivery for plus members<img src={freeDelivery} width={50}/></span>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-2 fw-semibold" onClick={(()=>addTocart(prodData.id))} style={{width:150}}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div> 
            ):  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
        <RecommendedItems/>
        </>
    );
}
 
export default ProductDetails;