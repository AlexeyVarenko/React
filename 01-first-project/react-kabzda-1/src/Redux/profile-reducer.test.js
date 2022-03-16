import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 11 },
    { id: 3, message: "Blabla", likeCount: 13 },
    { id: 4, message: "Dada", likeCount: 14 },
  ]
};


test('length of posts should be incremented', () => {
  let action = addPostActionCreator("it-kamasutra.com");

  let newState=profileReducer(state, action);

  expect (newState.posts.length).toBe(5);
});


test('message of new post should be it-kamasutra.com', () => {
  let action = addPostActionCreator("it-kamasutra.com");

  let newState=profileReducer(state, action);

  
  expect (newState.posts[4].message).toBe("it-kamasutra.com");
});




test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);

  let newState=profileReducer(state, action);

  
 expect (newState.posts.length).toBe(3);
});







test('after deleting length should not be decrement if id is incorrect', () => {
  let action = deletePost(1000);

  let newState=profileReducer(state, action);

  
 expect (newState.posts.length).toBe(4);
});


