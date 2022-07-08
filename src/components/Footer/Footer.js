import { connect } from "react-redux";

import './Footer.scss';

function Footer(props) {
    return (
        <div class="footer">
            <h2>Thank you for ordering!!</h2>
            <p>Use the offer and Save the Money copyrights@2022</p>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        linkDetails: state.details.linkDetails,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    //   increaseCounter: () => dispatch(increaseCounter()),
    //   decreaseCounter: () => dispatch(decreaseCounter()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);