import { createContext, useReducer } from "react";

const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  } );
const postListReducer = (currentPostList , action)=>{
    return currentPostList;
}
const addPost = () => {};
const deletePost = () => {};
const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, );
 
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

//childern mai lo bhi data milega usko provider <PostList.Provider> iss mai wrap kr dega mtlb daal dega !
