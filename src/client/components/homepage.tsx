import * as React from 'react'
import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { IBlog } from '../utils/types'

const HomePage: React.FC<IHomePageProps> = props => {

const [blogs, setBlogs] = useState<IBlog[]>([]);
useEffect(() => {
    (async () => {
        let res = await fetch(`/api/blogs`);
        let blogs = await res.json();
        setBlogs(blogs)
    })() 
}, []);

const history = useHistory();



    return (
       <main className="container">
            <h1>Cat's Blog</h1>
            <Link to ="/admin" className = "btn btn-outline-dark mt-2">Create New Blog</Link>
           <section className="row my-2 justify-content-center">
               {blogs.map(blog => (
                   <div className="card m-1" style={{width: '18rem'}} key = {blog.id}>
                   <div className="card-body">
               <h5 className="card-title">{blog.title}</h5>
                     <a href="#" className="btn btn-primary" onClick = {() => history.push(`/${blog.id}`)}>Details</a>
                     <a href="#" className="btn btn-primary ml-2">Delete</a>
                   </div>
                 </div>
               ))}
           </section>
       </main>
    )
};

interface IHomePageProps {
    blogs: IBlog

};

export default HomePage;
