import * as React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IBlog } from '../utils/types'

const HomePage: React.FC<IHomePageProps> = props => {

const [blogs, setBlogs] = useState<IBlog[]>([])
useEffect(() => {
    (async () => {
        let res = await fetch(`/api/blogs`);
        let blogs = await res.json();
        setBlogs(blogs)
    })() 
}, [])


    return (
       <main className="container">
           <h1>Cat's Blog</h1>
           <section className="row my-2 justify-content-center">
               {blogs.map(blog => (
                   <div className="card m-1" style={{width: '18rem'}} key = {blog.id}>
                   <div className="card-body">
               <h5 className="card-title">{blog.title}</h5>
                     <p className="card-text">{blog.content}</p>
                     <a href="#" className="btn btn-primary">Edit</a>
                     <a href="#" className="btn btn-primary ml-2">Delete</a>
                   </div>
                 </div>
               ))}
           </section>
       </main>
    )
}

interface IHomePageProps {

}

export default HomePage
