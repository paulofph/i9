import { combineReducers } from 'redux'
import {
  SELECT_IDEA,
  REQUEST_IDEAS,
  RECEIVE_IDEAS
} from './../actions/actions'

const defaultState = {
  ideas: {}
};

function ideas(state = null, action){
  console.log(2, action);
  switch(action.type){
    case RECEIVE_IDEAS:
      console.log(2, action);
      return Object.assign(
                {}, 
                state, 
                {
                  ideas: action.ideas
                }
             );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ideas
})
  
export default rootReducer
  