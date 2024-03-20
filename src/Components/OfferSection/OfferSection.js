import imgfull from './Images/imgfull.jpg';
import imgfull2 from './Images/imgfull2.jpg'
import imgfull3 from './Images/Combo.jpg';
import './OfferSection.css';

const OfferSection = () => {
    return ( 
        <div style={{margin:25,border:'1px solid lightgray'}} className='row flex-wrap'>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Starting ₹199 | Combo offers</h5>
                </div>
                <div>
                    <img src={imgfull3}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Up to 50% off | International brands</h5>
                </div>
                <div>
                    <img src={imgfull}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Starting ₹99 | Indoor plants</h5>
                </div>
                <div>
                    <img src={imgfull2}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>

        </div>
     );
}
 
export default OfferSection;