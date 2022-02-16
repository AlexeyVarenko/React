import { rerenderEntireTree } from "../render";

  let state={

    profilePage:{
        posts:[
            {id:1, message: 'Hi, how are you?', likeCount: 12},
            {id:2, message: "It's my first post", likeCount: 11},
            {id:3, message: "Blabla", likeCount: 13},
            {id:4, message: "DAda", likeCount: 14},
          ],
          

    },

    dialogsPage:{
        messages:[
            {id:1, message: 'Hi'},
            {id:2, message: 'How is your it-kamasutra?'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Yo'},
            {id:5, message: 'Yo'},
          ],
          dialogs:[
            {id:1, name: 'Dimych'},
            {id:2, name: 'Andrey'},
            {id:3, name: 'Sveta'},
            {id:4, name: 'Sasha'},
            {id:5, name: 'Victor'},
            {id:6, name: 'Valera'},
          ],
    } 

  }


  export let addPost=(postMessage)=>{
    let newPost={
      id:5,
      message:postMessage,
      likeCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
  }

  export default state;