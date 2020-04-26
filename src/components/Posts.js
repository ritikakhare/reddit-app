import React, { useState } from 'react';
import PostDetails from '../components/PostDetails';

function Posts(props) {
  let posts=null;
  const [selectedPost, setSelectedPost] = useState('');
  if (props.posts) {
    posts = props.posts.map((post) => {
      return (
        <div className="outerContainer">
          <li 
            className="post-li" 
            style={{ backgroundColor: (selectedPost === post.data.title) && 'rgb(204, 168, 121)' }} 
            onClick={() => setSelectedPost(post.data.title)} 
            key={post.data.id}>
              {post.data.title}
          </li>
          {selectedPost === post.data.title && <PostDetails selectedPost={selectedPost} post={post}></PostDetails>}
        </div>
      );
    });
  }
  return (
    <ul>
      {props.posts.length > 0 && <li className="nolist" style={{ fontWeight: 'bold' }}>Posts</li>}
      {posts}
    </ul>
  );
}

export default Posts;
