import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action) {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if(existingProduct) {
                existingProduct.quantity += 1;
            }else{
                state.push({...action.payload, quantity: 1});
            }
            
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        },
        removeOneFromCart(state, action) {
            const existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    return state.filter((item) => item.id !== action.payload.id);
                }
            }
        }
    }
})

export const { addToCart, deleteFromCart,removeOneFromCart } = cartSlice.actions;

export default cartSlice.reducer;