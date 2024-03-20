import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import img6 from './Images/img6.jpg'
import img7 from './Images/img7.jpg'
import img8 from './Images/img8.jpg'
import './TodaysDeals.css'

const TodaysDeals = () => {
    return ( 
        <>
        <div><h5 className='fw-bold' style={{margin: 25}}>Today’s Deals</h5></div>
        <div className='TodaysDeals'>
            <div className='row'>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img1} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 77% off</span>
                    <span>Best Offers on Storite</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img2} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 60% off</span>
                    <span>Best Offers on Storite</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img3} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 57% off</span>
                    <span>Best Deals on Puma</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img4} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 94% off</span>
                    <span>Travel Adapters..</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img5} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 40% off</span>
                    <span>Campus Footwear</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img6} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 69% off</span>
                    <span>Men's Formal Shoes</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img7} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 65% off</span>
                    <span>Top Trendy Bags</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={img8} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 64% off</span>
                    <span>Travel Accessories</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default TodaysDeals;