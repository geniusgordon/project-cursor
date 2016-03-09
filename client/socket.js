import io from 'socket.io-client';
import * as actions from './actions';

let socket = null;

export function createSocket(store) {
  socket = io.connect();
  socket.on('connect', () => {
    console.log('socket:', socket.id);
  });
  socket.on('othermousemove', data => {
    if (socket.id != data.id)
      store.dispatch(actions.otherMouseMove(data));
  });
  socket.on('othermouseleave', data => {
    if (socket.id != data.id)
      store.dispatch(actions.otherMouseLeave(data));
  });
  socket.on('otherpoke', data => {
    if (socket.id != data.id)
      store.dispatch(actions.otherPoke(data));
  });
  socket.on('otherrespond',data=>{
    if (socket.id != data.id)
      store.dispatch(actions.otherRespond(data));
  });
};

export function socketMiddleware(store) {
   return next => action => {
    if (socket == null) return next(action);
    if (action.type == actions.MOUSE_MOVE) {
      socket.emit('mousemove',
        Object.assign({},
          action.data,
          {id: socket.id}
        )
      );
    } else if (action.type == actions.POKE) {
      socket.emit('poke', action.data);
    } else if (action.type == actions.RESPOND_POKE){
      socket.emit('respondpoke',Object.assign({},action.data));
    }
    return next(action);
  };
};

