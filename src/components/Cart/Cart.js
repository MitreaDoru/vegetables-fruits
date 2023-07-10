import React from "react";
import styled from './Cart.module.css'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { dataAction } from "../store/data";
import Address from "./Address";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.data.cart)
    const showAddress = useSelector(state => state.data.showAddress)

    let totalPrice = 0;
    cartItems.forEach(item => totalPrice = totalPrice + Number(item.fullPrice))

    const items = cartItems.map(item =>
        <div id={item.name} key={item.name} className={styled.content}>
            <div className={styled.info}>
                <div>{item.name}</div>
                <div>{item.quantity} g</div>
                <div>{item.fullPrice} $</div>
            </div>
            <div className={styled.action}>
                <div className={styled.buttons}>
                    <button onClick={() => dispatch(dataAction.addToCart({ name: item.name, quantity: 500, price: item.price }))}>+</button>
                    <button onClick={() => dispatch(dataAction.addToCart({ name: item.name, quantity: -500, price: item.price }))}>-</button>
                </div>
            </div>
        </div>
    )
    return (
        <div onClick={(e) => e.stopPropagation()} className={styled.cart}>
            {items}
            <div className={styled.total}>Total price: {totalPrice} $</div>
            <div className={styled.confirm}>
                {totalPrice < 50 && <p>The order need to be minimum 50 $ </p>}
                {!showAddress && totalPrice >= 50 && <button onClick={() => dispatch(dataAction.toggleAddress())}>Confirm</button>}
            </div>
            {showAddress && totalPrice >= 50 && <Address />}
        </div>
    )
}

export default Cart