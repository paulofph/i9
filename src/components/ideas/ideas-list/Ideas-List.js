import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    fetchIdeas
} from './../../../actions/actions'
import './../../../App.css';
import HeaderBar from './../../_shared/Header-Bar'

class IdeasList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange(this);
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(fetchIdeas())
    // this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  render() {
    const { selectedSubreddit, ideas, isFetching, lastUpdated } = this.props
    console.log(3, this.props)
    return (
        <div >
          <HeaderBar />
          { this.props.ideas && 
            <ul>
              {/* {this.props.ideas.ideas.map((post, i) => <li key={i}>{post.title}</li>)}   */}
            </ul>
          }
        </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(2, state);
  const ideas = state.ideas;
  return {
    ideas
  }
}

export default connect(mapStateToProps) (IdeasList);