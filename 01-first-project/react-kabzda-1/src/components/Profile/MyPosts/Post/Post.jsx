import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src='https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg' />
    { props.message }
    <div>
      <span> like </span>  { props.like }
    </div>
  </div> 

}

export default Post;