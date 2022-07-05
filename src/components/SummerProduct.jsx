import { Container } from "react-bootstrap"
import '../assets/css/SummerProduct.css'

const SummerProduct = ()=>{
    return(
        <Container fluid className="summer">
           <p>Summer Sale</p>
           <h1>Healthy Kitchen</h1>
           <h2>Get <b>$15.00 Off</b> All Products</h2>
           <button className="btn">ADD TO CART</button>
        </Container>
    )
}
export default SummerProduct
