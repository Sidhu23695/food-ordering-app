import './MenuDetails.scss';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "../../Actions/index";

function MenuDetails(props) {
  return (
    <div className="MenuDetails">
      MenuDetails Page
      <button onClick={() => props.increaseCounter()}>Increase Count Menu</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count Menu</button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuDetails)
