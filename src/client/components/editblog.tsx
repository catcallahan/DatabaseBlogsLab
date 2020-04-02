import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IBlog } from '../utils/types'


const EditBlog: React.FC<IEditBlogProps> = props => {

    const [blog, setBlog] = useState<IBlog[]>([]);
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/blogs/${id}`);
            let blog = await res.json();
            setBlog(blog)
        })() 
    }, [id]);


    return (
        <form>
            <div className="container">

             {blog.map( b => {
                 return (
                    <div className="form-group" key = {b.id}>
                    <label htmlFor="title" >Title</label>
                    <input type="text" className= 'form-control' value = {b.title}/>
                    <label htmlFor="content" >Content</label>
                    <textarea name="content" className = 'form-control cols-30 rows-10'value = {b.content}></textarea>
                    <button className="btn btn-primary mt-1">Save Changes</button>
                    {/* go back not working correctly */}
                    <button className="btn btn-primary mt-1 ml-1" onClick = {() => history.goBack}>Back</button>
                    </div>
                    )
                })}
            </div>
        </form>
    )
}

interface IEditBlogProps {

}

export default EditBlog
