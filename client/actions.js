export const OTHER_MOUSE_MOVE = 'OTHER_MOUSE_MOVE';
export const OTHER_MOUSE_LEAVE = 'OTHER_MOUSE_LEAVE';
export const OTHER_POKE = 'OTHER_POKE';
export const POKE_ALERT_FADEOUT = 'POKE_ALERT_FADEOUT';

export function otherMouseMove(data) {
  return {
    type: OTHER_MOUSE_MOVE,
    data: data
  }
};

export function otherMouseLeave(data) {
  return {
    type: otherMouseLeave,
    data: data
  }
};

export function otherPoke(data) {
  return dispatch => {
    dispatch({
      type: OTHER_POKE,
      data: data
    });
    setTimeout(() => {
      dispatch({
        type: POKE_ALERT_FADEOUT
      });
    }, 1000);
  }
};

