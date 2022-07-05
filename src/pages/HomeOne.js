import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import FilterProducts from "../components/FilterProducts";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import OfferCategories from "../components/OfferCategories";
import OfferTimeCount from "../components/OfferTimeCount";
import ProductList from "../components/ProductList";
import SubscribeSection from "../components/SubscribeSection";
import Team from "../components/Team";

const HomeOne = () => {
    return (
        <>
         <Navigation/>
         <Cart/>
         <Banner/>
         <Categories/>
         <OfferTimeCount/>
         <ProductList/>
         <OfferCategories/>
         <FilterProducts/>
         <SubscribeSection/>
         <Team/>
         <Blog/>
         <Footer/>
        </>
    )
}
export default HomeOne;