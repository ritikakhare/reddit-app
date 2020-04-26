export const SET_SUBREDDITS='SET_SUBREDDITS';
export const GET_POSTS='GET_POSTS';
export const GET_SUBREDDITS_FAILED='GET_SUBREDDITS_FAILED';
export const GET_POSTS_FAILED='GET_POSTS_FAILED';

export const setSubReddits=(subReddits)=>{
  return {
    type:'SET_SUBREDDITS',
    subReddits:subReddits,
  };
};

export const getSubRedditsFailed=()=>{
  return {
    type:'GET_SUBREDDITS_FAILED',
  };
};

export const initSubReddits=()=>{
  return dispatch=>{
    fetch(' https://www.reddit.com/subreddits/popular.json?raw_json=1')
    .then(response => response.json())
    .then(data => dispatch(setSubReddits(data.data.children)))
    .catch(error=> dispatch(getSubRedditsFailed()));
  }
};

export const setPosts=(posts)=>{
  return {
    type:'GET_POSTS',
    posts:posts,
  }
};

export const getPostsFailed=()=>{
  return {
    type:'GET_POSTS_FAILED',
  };
};

export const getPosts=(payload)=>{
  let urlPoint=`https://www.reddit.com/r/${payload}/hot.json?raw_json=1`;
  return dispatch => {
    fetch(urlPoint)
    .then(response=>response.json())
    .then(data => dispatch(setPosts(data.data.children)))
    .catch((error)=> dispatch(getPostsFailed()));
  }
};