import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits: [
        { name: "apple", quantity: 0, price: 2 },
        { name: "orange", quantity: 0, price: 3 },
        { name: "lemon", quantity: 0, price: 4 },
        { name: "banana", quantity: 0, price: 3 },
        { name: "dragon fruit", quantity: 0, price: 7 },
        { name: "mango", quantity: 0, price: 5 },
        { name: "strawberries", quantity: 0, price: 6 },
        { name: "watermelon", quantity: 0, price: 2 },
        { name: "grapefruit", quantity: 0, price: 3 },
    ],
    vegetables: [
        { name: "potato", quantity: 0, price: 2 },
        { name: "tomato", quantity: 0, price: 3 },
        { name: "carrot", quantity: 0, price: 4 },
        { name: "broccoli", quantity: 0, price: 3 },
        { name: "mushrooms", quantity: 0, price: 2 },
        { name: "onion", quantity: 0, price: 2 },
        { name: "cauliflower", quantity: 0, price: 4 },
        { name: "green beans", quantity: 0, price: 1 },
        { name: "eggplant", quantity: 0, price: 2 },

    ],
    showCart: false,
    showFruits: true,
    showVegetables: true,
    showAdress: false,
    orderConfirmed: false,
    cart: []
}

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        closeCart(state) {
            state.showCart = false
        },
        showFruitsAndVegetables(state) {
            state.showFruits = true;
            state.showVegetables = true
        },
        showFruits(state) {
            state.showFruits = true;
            state.showVegetables = false
        },
        showVegetables(state) {
            state.showFruits = false;
            state.showVegetables = true
        },
        toggleAdress(state) {
            state.showAdress = !state.showAdress;
        },
        toggleOrderConfirmed(state) {
            state.orderConfirmed = !state.orderConfirmed
        },
        resetCart(state) {
            state.cart = []
            state.fruits.forEach(item => {
                if (item.quantity !== 0) item.quantity = 0
            })
            state.vegetables.forEach(item => {
                if (item.quantity !== 0) item.quantity = 0
            })
        },
        addToCart(state, action) {
            const { name, quantity, price } = action.payload
            const item = state.cart.find(item => item.name === name)

            const fruit = state.fruits.find(item => item.name === name)
            if (fruit) fruit.quantity = fruit.quantity + quantity
            const vegetable = state.vegetables.find(item => item.name === name)
            if (vegetable) vegetable.quantity = vegetable.quantity + quantity

            if (item && item.quantity + Number(quantity) > 0) {
                item.quantity = Number(item.quantity) + Number(quantity);
                item.fullPrice = item.fullPrice + price * quantity / 100
            } else if (item && item.quantity + Number(quantity) <= 0) {
                console.log(state.cart);
                state.cart = state.cart.filter(items => items !== item)
            } else if (!item && quantity > 0) {
                state.cart = [...state.cart, { name: name, quantity: quantity, price: price, fullPrice: price * quantity / 100 }]

            }

        },
    },
});

export const dataAction = dataSlice.actions;

export default dataSlice.reducer;

