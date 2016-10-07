import React from 'react';

import CartItem from './CartItem';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CartList';

        this.state = {
            cartItems: this.props.cartItems,
            checkedArray: this.props.checkedArray
        }
    }

    render() {
        console.log('render CartList');

    	// let cartItems = this.state.cartItems;
    	// let checkedArray = this.state.checkedArray;
        let cartItems = this.props.cartItems;
        let checkedArray = this.props.checkedArray;

    	let itemList = [];

    	cartItems.forEach(function(elem, index){
    		let cartItem = <li key={elem.id}><CartItem cartItem={elem} checked={checkedArray[index]} index={index} /></li>
    		
            itemList.push(cartItem);
    	});

        return (
        	<div>
        		<ul id="cartItemList">{itemList}</ul>
        	</div>
        );
    }
}

export default CartList;
