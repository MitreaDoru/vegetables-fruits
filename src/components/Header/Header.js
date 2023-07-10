import React from "react";
import styled from "./Header.module.css"
import { dataAction } from "../store/data";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.data.cart)
    const itemsInCart = cart.length

    return (
        <div className={styled.header}>
            <div onClick={() => dispatch(dataAction.showFruitsAndVegetables())} className={styled.logo}>AllFresh</div>
            <div onClick={() => dispatch(dataAction.toggleCart())} className={styled.cart}>
                <div><i className="fa fa-shopping-cart"></i></div>
                {itemsInCart}
            </div>
        </div>
    )
}

export default Header