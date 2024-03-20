import { useContext } from 'react';
import {ProdContext} from '../Context/ProductContext';
import './Products.css';
import { NavLink } from 'react-router-dom';
import productNotFound from './Images/no products found.png'

const Products = ({textBoxInput}) => {
    
    const {data , prodLoading} = useContext(ProdContext);
    // console.log(data);

    const filteredProducts = data?.filter((p) => {
      return p.name.toLowerCase().includes(textBoxInput.toLowerCase());
    });

    if (prodLoading) {
        return(
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return ( 
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-5 mb-5"  style={{minHeight:'41vh'}}>
            {
                filteredProducts.length === 0 ? <div><img src={productNotFound} height={300}/></div> :
                filteredProducts?.map((p)=>{
                    return(
                        <div className="Product-div">
                           <NavLink to={'/Products/'+p.id}  style={{textDecoration:'none'}}>
                                <div style={{textAlign:'center'}}><img src={p.image.url} style={{height:'180px',height:'160px'}}/></div>
                                <div style={{textAlign:'center'}}><h6 className='text-black'>{p.name}</h6></div>
                                <div style={{textAlign:'center'}}><span className='fw-bold text-success fs-4'>₹{p.price.raw}</span> <del className='text-secondary fw-normal'>{p.price.raw+1000}</del></div>
                                <div style={{textAlign:'center'}}><span className='text-warning'>Deal of the day</span></div>
                                <div style={{textAlign:'center'}}><span className='rounded-1 p-1 text-danger fw-semibold'>Save 30%</span></div>
                                <div style={{textAlign:'center'}}><span className='text-black'>Free delivery for plus members</span></div>
                            </NavLink>
                        </div>
                        
                    )
                })
            }
        </div>
     );
}
 
export default Products;