import { connect } from "react-redux";

// import {
//   increaseCounter,
//   decreaseCounter,
// } from "../../Actions/index";
import './HomePage.scss';

function HomePage(props) {

    return (
        <div className="HomePage">
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <div className="fakeimg" style={{height: '850px', backgroundSize: 'cover'}}>
                            <h2>Z-Hotel Presenting Buffet</h2>
                            <h5>Unlimited Banquet @599, July 13, 2022</h5>
                        </div>
                    </div>
                </div>
            </div>
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
    // increaseCounter: () => dispatch(increaseCounter()),
    // decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
