import { combineReducers } from 'redux'
import {
  SELECT_IDEA,
  REQUEST_IDEAS,
  RECEIVE_IDEAS
} from './../actions/actions'

function selectIdea(state = null, action){
  switch(action.type){
    case SELECT_IDEA:
      return action.post;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectIdea
})
  
export default rootReducer
  