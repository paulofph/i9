import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    fetchIdeas
} from './../../../actions/actions'
import './../../../App.css';

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
    console.log(1, this.props)
    return (
        <div>"IdeasList"</div>
    );
  }
}


function mapStateToProps(state) {
  
  console.log(state);
  const { ideas } = state

  return {
    ideas
  }
}

export default connect(mapStateToProps) (IdeasList);