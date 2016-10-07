import React from 'react'

import ShoppingCartAction from '../../actions/ShoppingCartAction'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CartItem';

        this.state = {
            cartItem: this.props.cartItem,
            checked: this.props.checked,
            index: this.props.index
        }

        this.updateChecked = this.updateChecked.bind(this);
        this.editCartItem = this.editCartItem.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }

    updateChecked(event) {
        let index = event.target.value;

        console.log('update checked index', index);

        ShoppingCartAction.updateCartItemChecked(index);
    }

    editCartItem(event) {
    	event.preventDefault();

    	console.log('edit cart item');
    }

    deleteCartItem(event) {
    	event.preventDefault();

    	console.log('delete cart item');
    }

    render() {
        console.log('render CartItem');
        let cartItem = this.props.cartItem;
        let checked = this.props.checked;
        let index = this.props.index;
        console.log('CartItem checked', checked);

        return (
        	<div>
        		<div className="row">
        			<div className="col-lg-2">
        				<input type="checkbox" checked={checked} 
                            value={index} onChange={this.updateChecked} />
        			</div>
        			<div className="col-lg-4">
        				<img src="" alt="" />
        			</div>
        			<div className="col-lg-6">
        				{/* offering name */}
        				<p>{cartItem.name}</p>
        				{/* offering desc */}
        				<p>{cartItem.desc}</p>
        				{/* offering price and amount */}
        				<p>{cartItem.price} x {cartItem.amount}</p>
        				{/* edit and delete button */}
        				<div>
        					<button type="button" className="btn btn-warning" onClick={this.editCartItem}>Edit</button>
        					<button type="button" className="btn btn-danger" onClick={this.deleteCartItem}>Delete</button>
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default CartItem;
