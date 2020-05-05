import React, { Component, Fragment } from "react";
import "../App.css";
import * as actionType from "./../store/actions";
import { connect } from "react-redux";
import SubReddit from "./../components/SubReddit";
import Posts from "./../components/Posts";

class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      selectedRedditName: false,
      searchText: "",
    };
    this.getPostsForSubReddit = this.getPostsForSubReddit.bind(this);
  }

  componentDidMount() {
    this.props.initSubReddits();
  }

  getPostsForSubReddit(redditName) {
    if (redditName !== this.state.selectedRedditName)
      this.props.getPosts(redditName);
    this.setState({ selectedRedditName: redditName });
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value });
    if (e.charCode === 13) this.props.search(e.target.value);
  };

  handleSearch = () => {
    if (this.state.searchText) this.props.search(this.state.searchText);
    else this.props.initSubReddits();
  };

  render() {
    return (
      <Fragment>
        {!this.props.loading && (
          <div className="search">
            <input
              type="text"
              onChange={(e) => this.setState({ searchText: e.target.value })}
            ></input>
            <input
              type="button"
              value="Search"
              className="searchButton"
              onClick={this.handleSearch}
            ></input>
          </div>
        )}
        <div className="reddit-container">
          {this.props.error && <div>Please try after sometime</div>}
          {this.props.loading && <div className="loader"></div>}
          <SubReddit
            className="subreddit-container"
            selectedRedditName={this.state.selectedRedditName}
            subreddits={this.props.subreddits}
            click={this.getPostsForSubReddit}
          ></SubReddit>
          <Posts className="posts-container" posts={this.props.posts}></Posts>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { subReddits, posts, error, loading } = state;
  return {
    subreddits: subReddits,
    error: error,
    posts: posts,
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (redditName) => dispatch(actionType.getPosts(redditName)),
    initSubReddits: () => dispatch(actionType.initSubReddits()),
    search: (searchText) => dispatch(actionType.search(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
