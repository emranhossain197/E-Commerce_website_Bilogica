import { Products } from "../assets/data"
import { useState } from "react"
import '../assets/css/RightContantFeature.css'
import P1 from '../assets/image/instagram-img.png'
import P2 from '../assets/image/instagram-img2.png'
import P3 from '../assets/image/instagram-img3.png'
import P4 from '../assets/image/instagram-img4.png'
import P5 from '../assets/image/instagram-img1.png'
import P6 from '../assets/image/instagram-img6.png'


const RightContantFeature = () => {

    const [active, setActive] = useState(1)
    // filter ar jon loop gola calano hoiye ce
    let AllProduct = Products.map(ProductItem => ProductItem.item)
    // console.log(AllProduct);
    const ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }

    const ProductData = []
    // all Product array
    for (let x = 0; x < ProductArr.length; x++) {
        if (x === 3) break
        ProductData.push(ProductArr[x])
    }


    const [products, setProducts] = useState(ProductData)
    const filterItem = (cateItem, event) => {
        setActive(event)
        if (cateItem === 'All') {
            setProducts(ProductData)
        } else {
            var arr = Products.filter(item => item.categories === cateItem)
            let product = arr.map(contant => contant.item)
            let filterProduct = []
            for (let u = 0; u < product.length; u++) {
                let allresult = product[u]
                for (let w = 0; w < allresult.length; w++) {
                    filterProduct.push(allresult[w])
                }
            }

            const ProductDataI = []
            // all Product array
            for (let x = 0; x < filterProduct.length; x++) {
                if (x === 3) break
                ProductDataI.push(filterProduct[x])
            }

            setProducts(ProductDataI)
        }

    }

    return (
        <>
            <div className="right-contant-feature">
                <div className="blog-categories">
                    <h1>Categories List </h1>
                    <ul>
                        {Products.map(item => (
                            <li><span>{item.categories}</span> <span>{item.item.length}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="products-update">
                    <h1>Latest: Updates</h1>
                    <div className="update-button">
                        <ul>
                            <li className={active === 1 ? "update-active-button" : ''} onClick={() => filterItem("All", 1)}>Recent</li>
                            <li className={active === 2 ? "update-active-button" : ''} onClick={() => filterItem("Vegetable", 2)}>Most Commented</li>
                            <li className={active === 3 ? "update-active-button" : ''} onClick={() => filterItem("Fresh Fruits", 3)}>Popular</li>
                        </ul>
                        <div className="update-container">
                            {products.map(item => (
                                <div className="update-container-item">
                                    <div className="update-item-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="update-item-title">
                                        <h3>{item.name}</h3>
                                        <h4>$ {item.price}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="archives">
                    <h1>Archives</h1>
                    <ul>
                        <li><span>March 2022</span> <span>1</span></li>
                        <li><span>February 2022</span> <span>1</span></li>
                        <li><span>January 2022</span> <span>1</span></li>
                    </ul>
                </div>
                <div className="gallery">
                    <h1>Gallery</h1>
                    <div className="gallery-img">
                        <img src={P1} alt="Image" />
                        <img src={P2} alt="Image" />
                        <img src={P3} alt="Image" />
                        <img src={P4} alt="Image" />
                        <img src={P5} alt="Image" />
                        <img src={P6} alt="Image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default RightContantFeature