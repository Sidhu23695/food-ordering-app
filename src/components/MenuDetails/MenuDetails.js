import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "../../Actions/index";
import './MenuDetails.scss';

function MenuDetails(props) {

    const { menuDetails } = props;
    return (
        <div className="MenuDetails">
        MenuDetails Page
        {menuDetails.map((menu, i) => 
            <p key={i}>{menu.NAME}</p>
        )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
      count: state.details.count,
      menuDetails: state.details.menuDetails,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      increaseCounter: () => dispatch(increaseCounter()),
      decreaseCounter: () => dispatch(decreaseCounter()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuDetails)
