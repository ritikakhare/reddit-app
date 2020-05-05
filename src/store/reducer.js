import * as actionTypes from "./actions";

const initialState = {
  subReddits: [],
  posts: [],
  error: false,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SUBREDDITS:
      return {
        ...state,
        subReddits: action.subReddits,
        loading: false,
        error: false,
      };
    case actionTypes.GET_SUBREDDITS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
