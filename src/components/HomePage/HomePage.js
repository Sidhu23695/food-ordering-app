import { connect } from "react-redux";

import './HomePage.scss';

function HomePage() {

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

export default connect(mapStateToProps, null)(HomePage)
