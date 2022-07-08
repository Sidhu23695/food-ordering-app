import { UPDATE_CART, EMPTY_CART } from '../Redux/constants';

const INITIAL_STATE = {
    cartDetails: [],
    menuDetails: [
        {
            id: 1,
            NAME: 'Dosa',
            TYPE: 'Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH'],
            PRICE: 50,
            COUNT: 0
        },
        {
            id: 2,
            NAME: 'Chappathi',
            TYPE: 'Veg',
            CUISINE: 'North Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH'],
            PRICE: 40,
            COUNT: 0
        },
        {
            id: 3,
            NAME: 'Chicken',
            TYPE: 'Non-Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['BREAKFAST','LUNCH','DINNER'],
            PRICE: 100,
            COUNT: 0
        },
        {
            id: 4,
            NAME: 'Mutton',
            TYPE: 'Non-Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['LUNCH'],
            PRICE: 180,
            COUNT: 0
        },
        {
            id: 5,
            NAME: 'Fish',
            TYPE: 'Non-Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['DINNER'],
            PRICE: 120,
            COUNT: 0
        },
        {
            id: 6,
            NAME: 'Cauliflower',
            TYPE: 'Veg',
            CUISINE: 'South Indian',
            AVAILABILITY: ['DINNER'],
            PRICE: 80,
            COUNT: 0
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
    ],
    linkDetails: [
        {
          id: 1,
          link: '/food-ordering-app',
          title: 'Home',
        },
        {
          id: 2,
          link: '/menu',
          title: 'Menu Card',
        },
        {
            id: 3,
            link: '/cart',
            title: 'Cart Details',
        },
        {
          id: 4,
          link: '/order-details',
          title: 'Order Details',
        },
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CART:
            let cart = JSON.parse(JSON.stringify(action.payload));
            cart = cart.filter(menu => menu.COUNT > 0);
            return {
                ...state, 
                cartDetails: cart,
                menuDetails: action.payload,
            };

        case EMPTY_CART:
            let updatedMenu = JSON.parse(JSON.stringify(action.payload));
            updatedMenu = updatedMenu.map(menu => {
                menu.COUNT = 0;
                return menu;
            });
            return {
                ...state, 
                cartDetails: [],
                menuDetails: updatedMenu,
            };

            default: return state;
    }
};

export default reducer;