import { Routes, Route } from "react-router";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import BlogPageTwo from "../pages/BlogPageTwo";
import HomeOne from "../pages/HomeOne";
import HomeTwo from "../pages/HomeTwo";
import NewProductPage from "../pages/NewProductsPage";
import ProductList from "../pages/ProductListPage";
import Shops from "../pages/Shops";
import TeamListPage from "../pages/TeamList";
import BlogSinglePage from '../pages/BlogSinglePage'
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import CheckOut from "../pages/CheckOut";


const Bilogica = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeOne/>}/>
            <Route path="/HomeTwo" element={<HomeTwo/>} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/NewProductPage" element={<NewProductPage/>} />
            <Route path="/ProductList" element={<ProductList/>} />
            <Route path="/teamList" element={<TeamListPage/>}/>
            <Route path="/blogPage" element={<BlogPage/>} />
            <Route path="/BlogPageTwo" element={<BlogPageTwo/>} />
            <Route path="/:productId" element={<Shops/>} />
            <Route path="/Blog/:BlogId" element={<BlogSinglePage/>} />
            <Route path="/service" element={<Services/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/checkout" element={<CheckOut/>} />
        </Routes>
    )
}
export default Bilogica;