import { NavLink } from 'react-router-dom';
import './Category.css';
import image1 from './Images/electronics.jpg'
import image2 from './Images/fashion.jpg'
import image3 from './Images/furniture.jpeg'
import image4 from './Images/kitchen.jpg'
const Category = () => {
    return ( 
        <div className="category row">
            <div className="Electronics col-6 col-md-4 col-lg-3">
                <NavLink to={'/categories/cat_gnZO5kGM357MNq'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={image1} style={{height:50}} className='rounded'/><span>Electronics</span>
                </NavLink>
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3">
                <NavLink to={'/categories/cat_7ZAMo1jEW5NJ4x'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={image2} style={{height:50}} className='rounded'/><span>Fashion</span>
                </NavLink>
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3">
                <NavLink to={'/categories/cat_8XO3wpBRX5YAzQ'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={image3} style={{height:50}} className='rounded'/><span>Furniture</span>
                </NavLink>    
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3">
                <NavLink to={'/categories/cat_bO6J5aEd95EjpK'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={image4} style={{height:50}} className='rounded'/><span>kitchen</span>
                </NavLink>
            </div>
        </div>
     );
}
 
export default Category;