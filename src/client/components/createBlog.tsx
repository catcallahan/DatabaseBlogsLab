import * as React from 'react'

const CreateBlog: React.FC<ICreateBlogProps> = props => {


    
    return (
        <form>
            <div className="container">
                    <div className="form-group">
                    <label htmlFor="title" >Title</label>
                    <input type="text" className= 'form-control'/>
                    <label htmlFor="content" >Content</label>
                    <textarea name="content" className = 'form-control cols-30 rows-10'></textarea>
                    <button className="btn btn-primary mt-1">Create Blog</button>
                    {/* go back not working correctly */}
                    <button className="btn btn-primary mt-1 ml-1" >Back</button>
                    </div>
            </div>
        </form>
    )
}

interface ICreateBlogProps{

}

export default CreateBlog
