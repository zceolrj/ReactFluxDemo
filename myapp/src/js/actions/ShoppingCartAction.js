/**
 *
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import ShoppingCartConstants from '../constants/ShoppingCartConstants';

const ShoppingCartAction = {

	updateCartItemChecked: function(index) {
		console.log('ShoppingCartAction updateCartItemChecked index', index);

		AppDispatcher.dispatch({
			actionType: ShoppingCartConstants.UPDATE_CART_ITEM_CHECKED,
			index: index
		});
	},

	updateAllChecked: function() {
		AppDispatcher.dispatch({
			actionType: ShoppingCartConstants.UPDATE_ALL_CHECKED
		});
	}
}

export default ShoppingCartAction