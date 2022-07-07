import './OrderDetails.scss';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "../../Actions/index";

function OrderDetails(props) {

  return (
    <div className="OrderDetails">
      <p className="test">OrderDetails Page: {props.count}</p>
      <button onClick={() => props.increaseCounter()}>Increase Count Order</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count Order</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
