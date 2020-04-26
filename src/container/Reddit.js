import React, { Component } from 'react';
import '../App.css';
import * as actionType from './../store/actions';
import { connect } from 'react-redux';
import SubReddit from './../components/SubReddit';
import Posts from './../components/Posts';

class Reddit extends Component {
  constructor(){
    super();
    this.state={
      selectedRedditName:false
    }
    this.getPostsForSubReddit=this.getPostsForSubReddit.bind(this);
  }

  componentDidMount(){
    this.props.initSubReddits();
  } 

  getPostsForSubReddit(redditName){
    this.props.getPosts(redditName);
    this.setState({selectedRedditName:redditName});
  }

  render(){
    return (
      <div className="reddit-container">
        {this.props.error && <div>Please try after sometime</div>}
        {this.props.loading && <div className="loader"></div>}
        <SubReddit 
          className="subreddit-container" 
          selectedRedditName={this.state.selectedRedditName} 
          subreddits={this.props.subreddits} 
          click={this.getPostsForSubReddit}>
        </SubReddit>
        <Posts 
          className="posts-container" 
          posts={this.props.posts}>
        </Posts> 
      </div>   
    )
  } 
}

const mapStateToProps=(state)=>{
  const { subReddits,posts,error,loading } = state;
  return {
    subreddits:subReddits,
    error:error,
    posts:posts,
    loading:loading,
  }
}

const mapDispatchToProps= dispatch=>{
  return {
    getPosts: (redditName)=>dispatch(actionType.getPosts(redditName)),
    initSubReddits:()=>dispatch(actionType.initSubReddits())
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Reddit);


