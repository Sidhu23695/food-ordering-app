import { connect } from "react-redux";

// import {
//   increaseCounter,
//   decreaseCounter,
// } from "../../Actions/index";
import './OrderDetails.scss';

function OrderDetails(props) {
    const { orderDetails } = props;

    return (
        <div className="OrderDetails">
            <p className="test">Your Current OrderDetails: </p>
            {orderDetails.map((menu, i) => 
                <p key={i}>{menu.ITEMNAME}</p>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: state.details.count,
        orderDetails: state.details.orderDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // increaseCounter: () => dispatch(increaseCounter()),
        // decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
