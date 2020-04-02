import * as React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IBlog } from '../utils/types'


const Singleblog: React.FC<ISingleblogProps> = props => {


    const [blog, setBlog] = useState<IBlog[]>([]);
    const { id } = useParams();
    const history = useHistory()


 
    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/blogs/${id}`);
            let blog = await res.json();
            setBlog(blog);
        })() 
    }, []);

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
             {blog.map(b => {
                  return (

                    <div className="card" style={{width: '40rem'}} key ={b.id}>
                        <div className="card-body">
                            <h5 className="card-title">{b.title}</h5>
                            <p className="card-text">{b.content}</p>
                            <a href="#" className="btn btn-primary" onClick = {() => history.push(`/${b.id}/edit`)}>Edit</a>
                            <a href="#" className="btn btn-primary ml-1">Delete</a>
                        </div>
                    </div>
                  )  
            })}
            </section>
        </main>
    )
};

interface ISingleblogProps {
   blog: IBlog
}

export default Singleblog
