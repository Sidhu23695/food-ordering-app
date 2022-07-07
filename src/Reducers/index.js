import { INCREMENT, DECREMENT } from '../Redux/constants';

const INITIAL_STATE = {
    count: 0,
    menuDetails: [
        {
            NAME: 'Dosa',
            TYPE: 'Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH'],
            PRICE: 50
        },
        {
            NAME: 'Chappathi',
            TYPE: 'Veg',
            CUISINE: 'North Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH'],
            PRICE: 40
        },
        {
            NAME: 'Chicken',
            TYPE: 'Non-Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH','DINNER'],
            PRICE: 100
        }
    ],
    orderDetails: [
        {
            ITEMNAME: 'Dosa',
            TYPE: 'Veg',
            CUISINE: 'South Indian',
            PRICE: 50,
            ORDER_DATE: '1-1-2021',
            ORDER_TIME: '2:30 PM'
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
            default: return state;
    }
};

export default reducer;