import { Connection } from '../index';
import { Query } from '../index'

export const all = async () => Query('SELECT * FROM blogs');
export const one = async (id: number) => Query('SELECT * FROM blogs WHERE id = ?', [id]);
export const publish = async (title: string, content:string) => Query('INSERT INTO blogs(title, content, authorid) VALUES (?, ?, 1);', [title, content]);
export const edit = async (id: number, title: string, content: string) => Query(`UPDATE blogs SET title = ?, content = ? WHERE id = ?`, [title, content, id]);
export const dlt = async (id:number) => Query('DELETE FROM blogs WHERE id = ?', [id]);
export const blogTags = async (id:number) => Query('CALL spBlogTags(?)', [id]);
    
export default {
    all,
    one,
    publish,
    edit,
    dlt,
    blogTags
};