import React from "react";
import styled from './Vegetables.module.css'
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store/data";

const Vegetables = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.vegetables)
    const showCart = useSelector((state) => state.data.showCart)

    const vegetables = data.map(vegetable =>
        <div key={vegetable.name} className={styled.vegetables}>
            <div className={styled.info}>
                <img src={require(`../Images/${vegetable.name}.jpg`).default} alt={vegetable.name} width={174} height={184}></img>
                <div>{vegetable.name}</div>
            </div>
            <div className={styled.action}>
                <div className={styled.price}>{vegetable.price}$ / 500g</div>
                <div>{vegetable.quantity}g in cart</div>
                <button onClick={() => dispatch(dataAction.addToCart({ name: vegetable.name, quantity: 500, price: vegetable.price }))} disabled={showCart}>Add to cart</button>
            </div>
        </div>

    )
    return (
        <div>
            {vegetables}
        </div>
    )
}

export default Vegetables