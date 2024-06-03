import {createSlice} from "@reduxjs/toolkit";

/*SELECTOR FUNCTIONS*/
export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, currentValue) => sum + currentValue.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, currentValue) => sum + currentValue.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => state => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;


/* STATE AND REDUCER*/
const initialState = {
    cart: [],
    // cart: [
    //     {
    //         pizzaId: 1,
    //         name: 'Medi',
    //         quantity: 1,
    //         unitPrice: 16,
    //         totalPrice: 16,
    //     }
    // ]
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            // payload = newItem
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            // payload = pizzaId
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
        },
        increaseItem: (state, action) => {
            //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseItem: (state, action) => {
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0) {
                cartSlice.caseReducers.removeItem(state,action)
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        },
    }
});

export const {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer;



