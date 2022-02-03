import { FETCH_ALL, CREATE } from "../constants/actionTypes";
export default function reducer(
  state = { isLoading: true, posts: [] },
  action
) {
  switch (action.type) {
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
}
