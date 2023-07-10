import React from "react";
import styled from './Content.module.css'
import VegetablesFruitsButtons from "../VegetablesFruits/VegetablesFruitsButtons";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Content = () => {
    const showCart = useSelector((state) => state.data.showCart)
    const showFruits = useSelector((state) => state.data.showFruits)
    const showVegetables = useSelector((state) => state.data.showVegetables)

    return (
        <div className={styled.all} >
            <div className={styled.content}>
                <VegetablesFruitsButtons />
            </div>
            <div className={styled.container}>
                <div className={styled.categories}>
                    <div className={styled.fruits}>
                        {showFruits && <Fruits />}
                    </div>
                    <div className={styled.vegetables}>
                        {showVegetables && <Vegetables />}
                    </div>
                </div>
            </div>
            {showCart && <Cart />}
        </div>
    )
}

export default Content