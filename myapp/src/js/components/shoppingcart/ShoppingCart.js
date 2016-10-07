/**
 *
 */
import React from 'react'

import CartList from './CartList'

import ShoppingCartAction from '../../actions/ShoppingCartAction'

import ShoppingCartStore from '../../stores/ShoppingCartStore'

class ShoppingCart extends React.Component{
	constructor(props){
		super(props);

		this.displayName = 'Shopping Cart';

		this.state = this.getShoppingCartState();

		this._onChange = this._onChange.bind(this);
		this.checkAll = this.checkAll.bind(this);
		this.settlement = this.settlement.bind(this);
	}

	componentDidMount(){
		console.log('ShoppingCart did mount');

		ShoppingCartStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		console.log('ShoppingCart will unmount');

		ShoppingCartStore.removeChangeListener(this._onChange);
	}

	getShoppingCartState(){
		console.log('try to get shopping cart state');

		return {
			cartItems: ShoppingCartStore.getAllCartItems(),
			checkedArray: ShoppingCartStore.getCheckedArray(),
			allChecked: ShoppingCartStore.getAllChecked(),
			totalPrice: ShoppingCartStore.getTotalPrice()
		}
	}

	_onChange(){
		console.log('_onChange');
		this.setState(this.getShoppingCartState());
	}

	checkAll(){
		console.log('check all in ShoppingCart');

		ShoppingCartAction.updateAllChecked();
	}

	settlement(){
		let checkedCartItems = ShoppingCartStore.getCheckedCartItems();

		console.log(checkedCartItems);
		console.log(this.state.totalPrice);
	}

	render(){
		console.log('render ShoppingCart');

		return (
			<div className="container">
				<CartList cartItems={this.state.cartItems} 
					checkedArray={this.state.checkedArray} />

				{/* shopping cart footer */}
				<div>
					<input type="checkbox" checked={this.state.allChecked} onChange={this.checkAll} />
					<label>Total Price: {this.state.totalPrice}</label>
					<button type="button" className="btn btn-info" onClick={this.settlement}>Settlement</button>
				</div>
			</div>
		);
	}
}

export default ShoppingCart