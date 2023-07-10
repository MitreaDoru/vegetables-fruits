import React from "react";
import styled from "./VegetablesFruitsButtons.module.css"
import { useDispatch } from "react-redux";
import { dataAction } from "../store/data";
const VegetablesFruitsButtons = () => {
    const dispatch = useDispatch()
    return (
        <div className={styled.categories}>
            <div onClick={() => dispatch(dataAction.showVegetables())} className={styled.vegetables}>Vegetables</div>
            <div onClick={() => dispatch(dataAction.showFruits())} className={styled.fruits}>Fruits</div>
        </div>
    )
}

export default VegetablesFruitsButtons