// import fetch from 'cross-fetch';

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
export function selectIdea(idea) {
  return {
    type: SELECT_IDEA,
    idea
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

function receiveIdeas(idea, json) {
  return {
    type: RECEIVE_IDEAS,
    idea,
    ideas: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(idea) {
  return function (dispatch) {
    dispatch(requestIdeas('x'));
    
    return fetch(`https://www.reddit.com/r/x.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then( json => 
        dispatch(receiveIdeas('idea', json))
      )
  }
}
