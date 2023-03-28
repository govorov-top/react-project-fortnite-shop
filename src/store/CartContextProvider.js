import React, {useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    let existingCartItemIndex, existingCartItem, updatedItem, updatedItems;
    switch (action.type){
        case 'ADD_ITEM' :
            existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            existingCartItem = state.items[existingCartItemIndex]
            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem
            }else {
                updatedItem = {...action.item}
                updatedItems = state.items.concat(updatedItem)
            }
            return {
                items: updatedItems,
                totalAmount: state.totalAmount + action.item.price * action.item.amount,
            }
        case 'REMOVE_ITEM' :
            existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
            existingCartItem = state.items[existingCartItemIndex]
            if (existingCartItem.amount === 1){
                updatedItems = state.items.filter(item => item.id !== action.id);
            }else {
                updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: state.totalAmount - existingCartItem.price
            }
        case 'REMOVE_ITEMS' :
            return {
                items: [],
                totalAmount: 0
            }
        default :
            return defaultCartState;
    }
}

const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = item => {
        dispatch({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemHandler = id => {
        dispatch({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const removeItemsHandler = () => {
        dispatch({
            type: 'REMOVE_ITEMS',
        })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        removeItems: removeItemsHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;