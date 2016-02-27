import {combineReducers} from 'redux';
import {
  OTHER_MOUSE_MOVE, OTHER_MOUSE_LEAVE,
  OTHER_POKE, POKE_ALERT_FADEOUT
} from './actions';

function cursors(state={}, action) {
  let c = {};
  switch (action.type) {
    case OTHER_MOUSE_MOVE:
      c[action.data.id] = action.data;
      return Object.assign({}, state, c);
    case OTHER_MOUSE_LEAVE:
      c[action.data.id] = null;
      return Object.assign({}, state, c);
    default:
      return state;
  }
}

function poke(state={isPoked: false, poker: null}, action) {
  switch (action.type) {
    case OTHER_POKE:
      return {
        isPoked: true,
        poker: action.data.id
      };
    case POKE_ALERT_FADEOUT:
      return {
        isPoked: false,
        poker: null
      };
    default:
      return state;
  }
}

export default combineReducers({
  cursors,
  poke
});

