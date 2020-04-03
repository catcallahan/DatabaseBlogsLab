import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IBlog } from '../utils/types'


const EditBlog: React.FC<IEditBlogProps> = props => {

    const [blog, setBlog] = useState<IBlog[]>([]);
    const [content, setContent] =useState<string>('');
    const [title, setTitle] =useState<string>('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/blogs/${id}`);
            let blog = await res.json();
            setBlog(blog)
        })() 
    }, [id]);

    const handleTitleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {

        setTitle(e.target.value)};
    const handleContentUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

    const handleSubmitUpdate = (e: React.MouseEvent) => {
        e.preventDefault();
        fetch(`/api/blogs/${id}`, {
            method : 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authorid: 1,
                title,
                content
            })
        })
        .then((res) => {
            console.log(res);
            setTitle("");
            setContent("");
        });
    }



    return (
        <form>
            <div className="container">

             {blog.map( b => {
                 return (
                    <div className="form-group" key = {b.id}>
                    <label htmlFor="title" >Title</label>
                    <input type="text" className= 'form-control' placeholder = {b.title} onChange = {handleTitleUpdate}/>
                    <label htmlFor="content" >Content</label>
                    <textarea name="content" className = 'form-control cols-30 rows-10'placeholder = {b.content} onChange = {handleContentUpdate}></textarea>
                    <button className="btn btn-primary mt-1" onClick = {handleSubmitUpdate}>Save Changes</button>
                    <button className="btn btn-primary mt-1 ml-1" onClick = {() => history.push(`/${b.id}`)}>Back</button>
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
