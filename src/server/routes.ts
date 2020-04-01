import * as express from 'express';
import DB from './db';

const router = express.Router();


router.get('/blogs', async (req, res)=> {
    try {
        let blogs = await DB.Blogs.all();
        res.json(blogs)
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});

router.get('/blogs/:id?', async (req,res)=> {
    try{
        let blog = await DB.Blogs.one(parseInt(req.params.id));
        res.json(blog)
        res.sendStatus(200);
    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }
});

//router.get (all blogs with tagid)


router.post('/blogs', (req, res)=>{
    try{
        DB.Blogs.publish(req.body.title, req.body.content);
        res.sendStatus(200);
    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }
});

router.put('/blogs/:id?', (req, res) => {
    try{
        let blogid = parseInt(req.params.id);
        DB.Blogs.edit(blogid, req.body.title, req.body.content)
        res.sendStatus(200);
    }catch(e) {
        console.log(e)
        res.sendStatus(500);
    }
        
});

router.delete('/blogs/:id?', (req, res) => {
    try{
        let blogid = parseInt(req.params.id);
        DB.Blogs.dlt(blogid)
        res.sendStatus(200);
    }catch(e) {
        console.log(e)
        res.sendStatus(500);
    }
});



export default router;