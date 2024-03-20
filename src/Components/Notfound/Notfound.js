import { NavLink } from 'react-router-dom';
import errorimg from './Images/error.png'

const NotFound = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-center pb-5">
                <div className="col d-flex justify-content-center">
                    <img src={errorimg} style={{height:'550px'}}/>
                </div>
                <NavLink to={'/'} className='btn btn-primary' style={{width:150}}>Go back to Home</NavLink>
            </div>
        </div>
     );
}
 
export default NotFound;