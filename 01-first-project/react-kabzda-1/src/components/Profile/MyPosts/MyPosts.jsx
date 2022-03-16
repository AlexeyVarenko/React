import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10= maxLengthCreator(10)

let AddNewPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={Textarea} placeholder={"Post message"}
         validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm ({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


const MyPosts = (props) => {

  let postsElements =
    [...props.posts]
    .reverse()
    .map(p => <Post message={p.message} like={p.likeCount} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return <div className={s.postsBlock}>
    My Posts
    <div>
    <AddNewPostFormRedux onSubmit={onAddPost} />
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}




export default MyPosts;