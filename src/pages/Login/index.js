import Login from './component';
import * as actions from './action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// function mapStateToProps(state) {

// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

const Connected = connect(null, mapDispatchToProps)(Login);
export default Connected;