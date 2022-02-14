import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts=[
    {id:1, message: 'Hi, how are you?', likeCount: 12},
    {id:2, message: "It's my first post", likeCount: 11},
    {id:3, message: "Blabla", likeCount: 13},
    {id:4, message: "DAda", likeCount: 14},
]

  let postsElements=
  posts.map(p=><Post message={p.message} like={p.likeCount} />)




  return <div className={s.postsBlock}>
    My Posts
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
    { postsElements }
    </div>
  </div>
}

export default MyPosts;