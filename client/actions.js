export const MOUSE_MOVE = 'MOUSE_MOVE';
export const OTHER_MOUSE_MOVE = 'OTHER_MOUSE_MOVE';
export const OTHER_MOUSE_LEAVE = 'OTHER_MOUSE_LEAVE';
export const POKE = 'POKE';
export const OTHER_POKE = 'OTHER_POKE';
export const POKE_ALERT_FADEOUT = 'POKE_ALERT_FADEOUT';
export const RESPOND_POKE = 'RESPOND_POKE';
export const OTHER_RESPOND = 'OTHER_RESPOND';

export function mouseMove(data) {
  return {
    type: MOUSE_MOVE,
    data: data
  }
};

export function otherMouseMove(data) {
  return {
    type: OTHER_MOUSE_MOVE,
    data: data
  }
};

export function otherMouseLeave(data) {
  return {
    type: OTHER_MOUSE_LEAVE,
    data: data
  }
};

export function poke(data) {
  return {
    type: POKE,
    data: data
  }
}

export function otherPoke(data) {
  return dispatch => {
    dispatch({
      type: OTHER_POKE,
      data: data
    });
    /*
    setTimeout(() => {
      dispatch({
        type: POKE_ALERT_FADEOUT
      });
    }, 2500);
    */
  }
};

export function respondPoke(data){
    return{
        type:RESPOND_POKE,
        data:data,
    }
}
export function otherRespond(data){
    return{
        type:OTHER_RESPOND,
        data:data,
    }
}
