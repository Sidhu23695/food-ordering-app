import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "../../Actions/index";
import './HomePage.scss';

function HomePage(props) {

  return (
    <div className="HomePage">
      <p className="test">Welcome to Z-Hotel</p>
      <p>Please order the food or See the order using the above link</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.details.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
