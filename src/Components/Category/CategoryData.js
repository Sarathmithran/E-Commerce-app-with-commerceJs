import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProdContext } from "../Context/ProductContext";

const CategoryData = ({textBoxInput}) => {

    const {data} = useContext(ProdContext);
    const {catId} = useParams();
    const navigate = useNavigate();
    const [categoriesName,setCategoriesName] = useState('');

   useEffect(() =>{
        const fetchCategoryData = async () => {
            try {
                const response = await fetch('https://api.chec.io/v1/categories/'+catId,{
                    method: "GET",
                    headers: {
                        'X-Authorization': 'pk_56071358605a875a29428978ff87f7f139cafebdd5046',
                        Accept: "application/json",
                                "Content-Type": "application/json",
                    }
                });
                const data = await response.json();
                setCategoriesName(data.slug);

            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchCategoryData();
    }, [catId]);

    //store filtered products
    const [filterCategoryProducts, setFilterCategoryProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = data.filter((d) => {
            return d.categories[0]?.slug === categoriesName;
        });
        setFilterCategoryProducts(filteredProducts)
    }, [data, categoriesName]);


    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-5 mb-5 gap-4" style={{minHeight:'45vh'}}>
            {
                filterCategoryProducts == 0 ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)
                :(
                <button className="btn bg-transparent d-flex flex-column" onClick={() => {navigate(-1)}} style={{width:50,height:40}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-arrow-left fw-bolder" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>           
                </button>
                )
            }
            
            {
                    filterCategoryProducts?.map((f)=>{
                        return(
                            <div className="category-prod-div">
                                <Link to={'/Products/'+f.id} style={{textDecoration:'none'}}>
                                    <div style={{textAlign:'center'}}><img src={f.image.url} style={{height:'200px',height:'160px'}}/></div>
                                    <div style={{textAlign:'center'}}><h6 className='text-black'>{f.name}</h6></div>
                                    <div style={{textAlign:'center'}}><span className='fw-bold text-success fs-4'>₹{f.price.raw}</span> <del className='text-secondary fw-normal'>{f.price.raw+1000}</del></div>
                                    <div style={{textAlign:'center'}}><span className='text-warning'>Deal of the day</span></div>
                                    <div style={{textAlign:'center'}}><span className='rounded-1 p-1 text-danger fw-semibold'>Save 30%</span></div>
                                    <div style={{textAlign:'center'}}><span className='text-black'>Free delivery for plus members</span></div>
                                </Link>
                            </div>
                        )
                    })
            }
        </div>
     );
}
 
export default CategoryData;