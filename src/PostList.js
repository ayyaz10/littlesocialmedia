import React from 'react';
import Post from './Post.js';

const PostList = ({newUsers})=> {
    const componentR = newUsers.map((user, i)=>{
        return <Post id={newUsers[i].id} name={newUsers[i].name} email={newUsers[i].email}/>
    })
    return (
    <div>
         {/* <Post id={newUsers[0].id} name={newUsers[0].name} email={newUsers[0].email}/> */}
         {componentR}
        </div>
    )
}

export default PostList;