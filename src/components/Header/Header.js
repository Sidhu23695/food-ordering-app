import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import './Header.scss';

function Header(props) {
    const location  = useLocation();
    const { linkDetails } = props;
    const classNames = (linkVal) =>  location.pathname === linkVal ? 'highlighted' : '';

    return (
        <>
            <div className="header">
                <h1>Welcome to Z-Hotel</h1>
                <p>Enjoy your food. Finger licking delicious!!</p>
            </div>
            <div className="topnav">
                {linkDetails.map((linkVal, i) => {
                    return <Link key={i} to={linkVal.link}><span className={classNames(linkVal.link)} >{linkVal.title}</span></Link>
                })}
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        linkDetails: state.details.linkDetails,
    }
  }
  
  export default connect(mapStateToProps, null)(Header)