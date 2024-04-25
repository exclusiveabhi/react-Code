import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Dhampur",
    body: "ufsguhsgfuhzdfgjksdasfkahdsfkdfskaLDFAJdfjkdsjfg",
    reaction: 0,
    userId: "",
    tag: ["vacation", "dhampur"],
  },
  {
    id: "2",
    title: "Go to Moradabad",
    body: "ufsguhsgfuhzdfgjksdasfkahdsfkdfskaLDFAJdfjkdsjfg",
    reaction: 0,
    userId: "",
    tag: ["vacation", "moradabad"],
  },
];

const postListReducer = (currentPostList, action) => {
  var newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
const addPost = () => {};
const deletePost = (postId) => {
  // console.log(postId)
  dispatchPostList({
    type: "DELETE_POST",
    payload: {
      postId,
    },
  });
};


  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
