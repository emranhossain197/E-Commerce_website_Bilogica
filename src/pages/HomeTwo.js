import NavTwo from "../components/NavTwo";
import Hore from "../components/Hore";
import Service from "../components/Service";
import IntruduceProduct from "../components/IntruduceProduct";
import SummerProduct from "../components/SummerProduct";
import FilterProducts from "../components/FilterProducts";
import ShopCategorie from "../components/ShopCategorie";
import ProductFeature from "../components/ProductFeature";
import Blog from '../components/Blog'
import FooterTwo from "../components/FooterTwo";
import Cart from "../components/Cart";

const HomeTwo = () => {
    return (
        <>
        <NavTwo/>
        <Cart/>
        <Hore/>
        <Service/>
        <IntruduceProduct/>
        <SummerProduct/>
        <FilterProducts/>
        <ShopCategorie/>
        <ProductFeature/>
        <Blog/>
        <FooterTwo/>
        </>
    )
}
export default HomeTwo;