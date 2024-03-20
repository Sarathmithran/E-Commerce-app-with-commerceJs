import otherimg1 from './Images/otherimg1.jpg';
import otherimg2 from './Images/otherimg2.jpg';
import otherimg3 from './Images/offerimg3.jpg';
import otherimg4 from './Images/offerimg4.jpg';
import otherimg5 from './Images/offerimg5.jpg';
import otherimg6 from './Images/offerimg6.jpg';

const OtherOffers = () => {
    return ( 
        <div style={{margin:25,border:'1px solid lightgray',padding:6}}>
            <div>
                <div>
                    <h5 className='fw-bold'>Upto 70% off | Curated furniture from stores nearby</h5>
                </div>
                <div className="row gap-3 pt-2">
                    <div className="col">
                        <img src={otherimg1}/>
                    </div>
                    <div className="col">
                        <img src={otherimg2}/>
                    </div>
                    <div className="col">
                        <img src={otherimg3}/>
                    </div>
                    <div className="col">
                        <img src={otherimg4}/>
                    </div>
                    <div className="col">
                        <img src={otherimg5}/>
                    </div>
                    <div className="col">
                        <img src={otherimg6}/>
                    </div>
                    
                </div>
            </div>   
        </div>
     );
}
 
export default OtherOffers;