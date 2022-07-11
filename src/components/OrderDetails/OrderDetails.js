import { useState, useEffect } from 'react';
import { connect } from "react-redux";

import './OrderDetails.scss';

function OrderDetails(props) {
    const { orderDetails } = props;
    const [orderDatas, updateorderDatas] = useState([]);
    const [veganFilter, updateVeganFilter] = useState('All');
    const [dateSort, updateDateSort] = useState(true);
    const [searchOrder, updateSearchOrder] = useState(null);

    const filterAppliedForDatas = () => {
        const currentDate = new Date();
        const currentDateTime = currentDate.getTime();
        const last30DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 30));
        const last30DaysDateTime = last30DaysDate.getTime();

        let orderDatas = orderDetails.filter(x => {
            const elementDateTime = new Date(x.ORDER_DATE).getTime();
            if (elementDateTime <= currentDateTime && elementDateTime > last30DaysDateTime) {
                return true;
            }
            return false
        });
        if (veganFilter !== 'All') {
            orderDatas = orderDetails.filter((order, i) => order.TYPE === veganFilter);
        }
        if (searchOrder) {
            orderDatas = orderDatas.filter(item => item.ITEMNAME.toLowerCase().includes(searchOrder.toLowerCase()));
        }
        orderDatas.sort((orderOne, orderTwo) => !dateSort ? new Date(orderOne.ORDER_DATE) - new Date(orderTwo.ORDER_DATE) : new Date(orderTwo.ORDER_DATE) - new Date(orderOne.ORDER_DATE));
        updateorderDatas(orderDatas);
    };

    useEffect(() => {
        filterAppliedForDatas();
     }, [veganFilter, dateSort, searchOrder]);

    const arrowDirection = dateSort ? 'up' : 'down';
    const arrowClass = `arrow ${arrowDirection}`;

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

    const dateSortFunction = () => {
        updateDateSort(!dateSort);
    }

    return (
        <div className="OrderDetails">
            <div className="row">
                <div className="leftcolumn">
                    <div className="filterDiv">
                        <span className="filterGroup">
                            <b>Search:</b>&nbsp; 
                            <input type="text" onChange={(e) => updateSearchOrder(e.target.value)} placeholder="Search by dish name" />
                        </span>
                        <div className="hideForMobile"><br/></div>
                        <span className="filterGroup">
                            <b>Filter:</b>&nbsp;
                            <select defaultValue={veganFilter} className="selectStyle" onChange={(e) => updateVeganFilter(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>
                        </span>
                        <div className="hideForMobile"><br/></div>
                        <span className="filterGroup">
                            <b>Sort By Date <span className={arrowClass} onClick={() => dateSortFunction()}></span></b>&nbsp;
                        </span>
                    </div>
                </div>
                <div className="leftcolumn">
                    {orderDatas.map((order, i) => 
                        orderCard(order, i)
                    )}
                    {orderDatas.length === 0 
                    ? <div className="card fullCard">
                        <center>
                            <h2>Cart is Empty!!</h2>
                        </center>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    : ''}
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
