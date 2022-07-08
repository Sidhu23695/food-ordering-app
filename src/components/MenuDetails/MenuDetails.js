import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    updateCartDetails,
    emptyCartDetails
} from "../../Actions/index";
import './MenuDetails.scss';

function MenuDetails(props) {

    const navigate = useNavigate();

    const { menuDetails, isCart } = props;

    const updateCart = (id, isAdd) => {
        let menus = JSON.parse(JSON.stringify(menuDetails));
        menus.filter((menu, i) => {
            if (id === i+1) {
                menu.COUNT = isAdd ? menu.COUNT+1 : menu.COUNT !== 0 ? menu.COUNT-1 : 0;
            }
            return menu;
        });
        props.updateCartDetails(menus);
    }

  const Card = (menu, isEmptyCard, index) => {
    return (
        !isEmptyCard 
            ? <div key={index} className="card">
                <h2>{menu.NAME}</h2>
                <div className="fakeimg" style={{height: '250px', backgroundSize: 'cover'}}></div>
                <br/>
                <p>
                    <b>Type:</b> {menu.TYPE}
                </p>
                <p>
                    <b>Cuisine:</b> {menu.CUISINE}
                </p>
                <p>
                    <b>Availability:</b> {menu.AVAILABILITY.join(', ')}
                </p>
                <p>
                    <b>Price: ₹</b>{menu.PRICE}
                </p>
                <center>
                    <button onClick={() => updateCart(menu.id, false)}>-</button> &nbsp; {menu.COUNT} &nbsp;
                    <button onClick={() => updateCart(menu.id, true)}>+</button>
                </center>
            </div> 
            : <div className="card fullCard">
                <center>
                    <h2>Cart is Empty!!</h2>
                </center>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    };

    const isCartEmpty = () => {
        if (isCart) {
            return !menuDetails.some(menu => menu.COUNT > 0);
        }
    }

    const isPlaceOrderButton = () => {
        if (isCart) {
            return menuDetails.some(menu => menu.COUNT > 0);
        }
    }

    const getDateAndTime = (isDate) => {
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() +1 ) + '-' + today.getFullYear();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + minutes + ' ' + ampm;
        return isDate ? date : time;
    }

    const placeOrder = () => {
        const selectedMenuDetails = menuDetails.filter(menu => menu.COUNT > 0);
        const orderDetails = selectedMenuDetails.map((order, i) => {
            const obj = {
                ITEMNAME: order.NAME,
                TYPE: order.TYPE,
                CUISINE: order.CUISINE,
                PRICE: order.PRICE,
                ORDER_DATE: getDateAndTime(true),
                ORDER_TIME: getDateAndTime(false),
            }
            return obj;
        })
        console.log('orderDetails', orderDetails);
        const returnVal = {
            menuDetails,
            orderDetails
        }
        props.emptyCartDetails(returnVal);
        navigate("/order-details");
    }

    return (
        <div className="MenuDetails">
            <div className="row">
                <div className="leftcolumn">
                    {menuDetails.map((menu, i) => 
                        isCart && menu.COUNT> 0 
                        ? Card(menu, isCartEmpty(), i) 
                        : !isCart ?  Card(menu, isCartEmpty(), i) 
                        : ''
                    )}

                    {isCartEmpty() 
                    ? Card(null, isCartEmpty(), 0) 
                    : ''}
                </div>
                {isPlaceOrderButton() 
                ? <div>
                    <br/>
                    <center>
                        <button className="placeOrderButton" onClick={() => placeOrder()}>Place Order</button>
                    </center>
                </div>
                : ''}
            </div>
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
        updateCartDetails: (payload) => dispatch(updateCartDetails(payload)),
        emptyCartDetails: (payload) => dispatch(emptyCartDetails(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetails)
