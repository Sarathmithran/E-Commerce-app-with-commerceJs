import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OfferSection from "../OfferSection/OfferSection";
import OtherOffers from "../OtherOffers/OtherOffers";
import Products from "../Products/Products";
import RecommendedItems from "../RecommendedItems/RecommendedItems";
import TodaysDeals from "../TodaysDeals/TodaysDeals";

const Home = () => {
    return ( 
        <div>
            <Category/>
            <Banner/>
            <TodaysDeals/>
            <RecommendedItems/>
            <OfferSection/>
            <OtherOffers/>
        </div>
     );
}
 
export default Home;