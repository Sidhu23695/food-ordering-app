import { useState } from 'react';
import { connect } from "react-redux";

import './OrderDetails.scss';

function OrderDetails(props) {
    const { orderDetails } = props;
    const [orderDatas, updateorderDatas] = useState(orderDetails);
    const [veganSort, updateVeganSort] = useState('');

    const filterByVegan = (event) => {
        updateVeganSort(event.target.value);
        let orderDatas = orderDetails.filter((order, i) => order.TYPE === event.target.value);
        updateorderDatas(orderDatas);
    };

    const orderCard = (order, index) => {
        return (
            <div key={index} className="card">
                <h2>{order.ITEMNAME}</h2>
                <p>
                    <b>Type:</b> {order.TYPE}
                </p>
                <p>
                    <b>Cuisine:</b> {order.CUISINE}
                </p>
                <p>
                    <b>Order Date:</b> {order.ORDER_DATE}
                </p>
                <p>
                    <b>Order Time:</b> {order.ORDER_TIME}
                </p>
                <p>
                    <b>Price: ₹</b>{order.PRICE}
                </p>
            </div>
        )
    };

    return (
        <div className="OrderDetails">
            <div className="row">
                <div className="leftcolumn">
                    <div className="filterDiv">
                        <span className="filterGroup">
                            <b>Search:</b>&nbsp; 
                            <input type="text" />
                        </span>
                        <span className="filterGroup">
                            <b>Filter:</b>&nbsp;
                            <select className="selectStyle" onChange={(e) => filterByVegan(e)}>
                                <option>Select</option>
                                <option value="Veg" selected={veganSort === 'Veg'}>Veg</option>
                                <option value="Non-Veg" selected={veganSort === 'Non-Veg'}>Non-Veg</option>
                            </select>
                        </span>
                        <span className="filterGroup">
                            <b>Sort:</b>&nbsp;
                            <input type="text" />
                        </span>
                    </div>
                </div>
                <div className="leftcolumn">
                    {orderDatas.map((order, i) => 
                        orderCard(order, i)
                    )}
                </div>
            </div>
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
