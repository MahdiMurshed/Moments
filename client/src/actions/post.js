import * as api from "../api";
import { FETCH_ALL, CREATE } from "../constants/actionTypes";
export const createPost = (post, history) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    console.log(data);

    history.push(`/posts`);
  } catch (error) {
    console.log(error.message);
  }
};
