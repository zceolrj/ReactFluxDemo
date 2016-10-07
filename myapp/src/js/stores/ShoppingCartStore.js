import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import ShoppingCartConstants from '../constants/ShoppingCartConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let cartItems = [
	{
		id: '001',
		code: '001',
		name: 'iphone 7',
		desc: '128G  grey  metal',
		img: '',
		price: 6000,
		amount: 1
	},
	{
		id: '002',
		code: '002',
		name: 'samsung note 8',
		desc: '64G white sliver',
		img: '',
		price: 5000,
		amount: 1
	},
	{
		id: '003',
		code: '003',
		name: 'huawei mate 9',
		desc: '32G pink golden',
		img: '',
		price: 4000,
		amount: 1
	}
];

let checkedArray = [];
for(let i=0;i<cartItems.length;i++){
	checkedArray.push(false);
}

let totalPrice = 0;
let allChecked = false;

function updateChecked(index) {
	console.log('ShoppingCartStore updateChecked index', index);

	let checked = checkedArray[index];

	if(checked){
		checkedArray[index] = false;

		let cartItem = cartItems[index];
		totalPrice -= cartItem.price * cartItem.amount;

		allChecked = false;
	}
	else{
		checkedArray[index] = true;

		let cartItem = cartItems[index];
		totalPrice += cartItem.price * cartItem.amount;

		allChecked = true;
		for(let i=0;i<checkedArray.length;i++){
			if(!checkedArray[i]){
				allChecked = false;
				break;
			}
		}
	}
}

function updateAllChecked() {
	if(allChecked){
		allChecked = false;

		checkedArray.forEach(function(elem, index, arr){
			arr[index] = false;
		});

		totalPrice = 0;
	}
	else{
		allChecked = true;

		totalPrice = 0;

		checkedArray.forEach(function(elem, index, arr){
			arr[index] = true;

			totalPrice += cartItems[index].price * cartItems[index].amount;
		});
	}
}

const ShoppingCartStore = assign({}, EventEmitter.prototype, {

	getAllCartItems: function() {
		return cartItems;
	},

	getCheckedArray: function() {
		return checkedArray;
	},

	getTotalPrice: function() {
		return totalPrice;
	},

	getAllChecked: function() {
		return allChecked;
	},

	getCheckedCartItems: function() {
		let checkedCartItems = [];

		checkedArray.forEach(function(elem, index){
			if(elem){
				checkedCartItems.push(cartItems[index]);	
			}
			
		});

		return checkedCartItems;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

/* Register callback to handle all updates */
AppDispatcher.register(function(action) {

	switch(action.actionType) {
		case ShoppingCartConstants.UPDATE_CART_ITEM_CHECKED:
			let index = action.index;
			updateChecked(index);
			ShoppingCartStore.emitChange();

			break;

		case ShoppingCartConstants.UPDATE_ALL_CHECKED:
			updateAllChecked();
			ShoppingCartStore.emitChange();

			break;

		default:
			console.log('switch default');
	}
});

export default ShoppingCartStore;