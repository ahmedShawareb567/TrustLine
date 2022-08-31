import { createSlice } from "@reduxjs/toolkit";
import { $axios } from "../../axios";

const fetchPosts: any = () => async (dispatch: any, getState: any) => {
  try {
    const { data, status } = await $axios.get("/posts");
    if (status === 200) {
      dispatch(setPosts(data));
    }
  } catch (e) {
    console.log(e);
  }
};

const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, { payload }: any) {
      state.posts = payload;
    },
    createPost(state: any, { payload }: any) {
      state.posts.unshift(payload);
    },
    updatePostById(state, { payload }: any) {
      const currentPost: any = state.posts.find(
        (post: any) => post.id === payload.id
      );
      if (currentPost) {
        currentPost.title = payload.title;
        currentPost.body = payload.body;
      }
    },
    deletePost(state, { payload }: any) {
      const postIndex = state.posts.findIndex(
        (item: any) => item.id === payload
      );
      state.posts.splice(postIndex, 1);
    },
  },
});

const { setPosts, updatePostById, deletePost, createPost } = PostSlice.actions;
const PostReducer = PostSlice.reducer;

export {
  PostReducer,
  setPosts,
  fetchPosts,
  updatePostById,
  deletePost,
  createPost,
};
