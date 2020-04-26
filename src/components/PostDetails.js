import React from 'react';

function PostDetails(props) {
  let {post}=props;
  let url=post.data.preview?.images[0].source.url;

    return (
      <div className="panel"> 
        {url && <img src={url} alt="Loading.." style={{width:'20%',height:'20%'}}></img>}
        <p>{post.data.title}</p>
        <p>Author: {post.data.author}</p>
        <a className="button" href={post.data.url} target="_blank" rel="noopener noreferrer">Read Post</a>
      </div>
      )
    }

export default PostDetails;
