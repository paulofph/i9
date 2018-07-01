import fetch from 'cross-fetch';

/*
 * action types
 */
/* sync */
export const SELECT_IDEA = 'SELECT_IDEA';
export const ADD_IDEA = 'ADD_IDEA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/* async */
export const REQUEST_IDEAS = 'REQUEST_IDEAS'
export const RECEIVE_IDEAS = 'RECEIVE_IDEAS'
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action creators
 */
/* sync */
export function selectIdea() {
  return {
    type: SELECT_IDEA
  }
}

export function addIdeia(text) {
  return { type: ADD_IDEA, text }
}
  
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

/* async */
function requestIdeas(idea) {
  return {
    type: REQUEST_IDEAS,
    idea
  }
}

function receiveIdeas(json) {
  
  const action = {
    type: RECEIVE_IDEAS,
    ideas: json,
    receivedAt: Date.now()
  }
  console.log(4, action)
  return {
    type: RECEIVE_IDEAS,
    ideas: json,
    receivedAt: Date.now()
  }
}

export function fetchIdeas() {
  console.log(5);
  return dispatch => {
    // dispatch(requestPosts(subreddit))
    return fetch(`http://localhost:3000/api/Ideas`)
      .then(response => response.json())
      .then(json => dispatch(receiveIdeas(json)))
  }
}
