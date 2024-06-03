import React from 'react';
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {decreaseItem, increaseItem} from "./cartSlice.js";

function UpdateItemQuantity({pizzaId, quantity}) {
    const dispatch = useDispatch();

    return (
        <div className={"flex gap-2 items-center md:gap-3"}>
            <Button type={"round"} onClick={() => dispatch(decreaseItem(pizzaId))}>-</Button>
            <span className={"text-sm font-medium"}>{quantity}</span>
            <Button type={"round"} onClick={() => dispatch(increaseItem(pizzaId))}>+</Button>
        </div>
    );
}

export default UpdateItemQuantity;