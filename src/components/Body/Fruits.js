import React from "react";
import styled from './Fruits.module.css'
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store/data";
const Fruits = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.fruits)
    const showCart = useSelector((state) => state.data.showCart)

    const fruits = data.map(fruit =>
        <div key={fruit.name} className={styled.fruits}>
            <div className={styled.info}>
                <img src={require(`../Images/${fruit.name}.jpg`).default} alt={fruit.name} width={300} height={168}></img>
                <div>{fruit.name}</div>
            </div>
            <div className={styled.action}>
                <div className={styled.price}>{fruit.price}$ / 500g</div>
                <div>{fruit.quantity}g in cart</div>
                <button onClick={() => dispatch(dataAction.addToCart({ name: fruit.name, quantity: 500, price: fruit.price }))} disabled={showCart}>Add to cart</button>
            </div>
        </div>
    )

    return (
        <div>
            {fruits}
        </div>
    )
}

export default Fruits