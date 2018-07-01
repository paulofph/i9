import { combineReducers } from 'redux'
import {
  SELECT_IDEA,
  REQUEST_IDEAS,
  RECEIVE_IDEAS
} from './../actions/actions'

const defaultState = {

};

function ideasReducer(state = defaultState, action){
  switch(action.type){
    case RECEIVE_IDEAS:{
      const futureState = Object.assign(
        {}, 
        state, 
        {
          ideas: action.ideas
        }
     );
      console.log(1.1, state);
      console.log(1.2, futureState);
      console.log(1.3, action.ideas);
      return futureState;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ideasReducer
})
  
export default rootReducer
  