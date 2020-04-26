import React, { Fragment } from 'react';

function SubReddit(props) {
  let subreddit=null;
  if(props.subreddits){
    subreddit=props.subreddits.map((subreddit)=>{
      return (
      <li 
        className="ul-item" 
        style={{backgroundColor: (props.selectedRedditName === subreddit.data.display_name) && 'rgb(204, 168, 121)'}} 
        onClick={()=>props.click(subreddit.data.display_name)} 
        key={subreddit.data.id}>
          {subreddit.data.display_name}
      </li>)
    })
  }
  return (
    <Fragment>
      <ul className="nolist">
        {props.subreddits.length>0 && <li style={{fontWeight:'bold'}}>Sub Reddits</li>}
        {subreddit}
      </ul>
    </Fragment>
  );
}

export default SubReddit;
