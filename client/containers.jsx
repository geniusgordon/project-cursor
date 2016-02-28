import React from 'react';
import {connect} from 'react-redux'
import Root from './components/root';
import * as actions from './actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    handleMouseMove(e) {
      dispatch(actions.mouseMove({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
        url: document.location.href
      }));
    },
    handleOtherMouseMove(data) {
      dispatch(actions.otherMouseMove(data));
    },
    handleOtherMouseLeave(data) {
      dispatch(actions.otherMouseLeave(data));
    },
    handlePoke(e, id) {
      dispatch(actions.poke({id: id}));
    },
    handleOtherPoke(data) {
      dispatch(actions.otherPoke(data));
    }
  };
};

const CursorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

export default CursorContainer;

