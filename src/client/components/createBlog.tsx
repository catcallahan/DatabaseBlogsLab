import * as React from 'react'
import { json } from 'express'
import { IBlog } from '../utils/types';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const CreateBlog: React.FC<ICreateBlogProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const history = useHistory()

const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)

const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
     fetch(`/api/blogs`, {
        method: "POST",
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
                    <div className="form-group">
                    <label htmlFor="title" >Title</label>
                    <input type="text" className= 'form-control' id = 'titleInput' onChange = {handleTitleChange}/>
                    <label htmlFor="content" >Content</label>
                    <textarea name="content" className = 'form-control cols-30 rows-10'onChange = {handleContentChange}></textarea>
                    <button className="btn btn-primary mt-1" onClick = {handleClick}>Create Blog</button>
                    <button className="btn btn-primary mt-1 ml-1" onClick = {() => history.push('/')}>Back</button>
                    </div>
            </div>
        </form>
    )
}

interface ICreateBlogProps{

}

export default CreateBlog
