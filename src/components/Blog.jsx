import { Container } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Blogs } from "../assets/BlogData"
import '../assets/css/BlogStyle.css'

const Blog = ()=>{
    const BlogArr=[]

    for(let i= 0; i<Blogs.length; i++){
        if(i === 3) break
        BlogArr.push(Blogs[i])
    }
    const [Data, setData] = useState(BlogArr)
    
    return(
        <Container>
            <div className="blog-text">
                <h1>Latest <b>News From</b> Blog</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis non deserunt harum ipsam neque error.tempore nisi impedit consequatur </p>
            </div>
            <div className="blog-container">
                {Data.map(items => (
                    <div className="blog-items">
                        <Link to={`/Blog/${items.id}`}>
                            <img src={items.image} alt="image" />
                            <h3><span>{items.publishedAt}</span></h3>
                            <h4>{items.title}</h4>
                        </Link>
                    </div>
                ))}

            </div>
           
        </Container>
    )
}

export default Blog