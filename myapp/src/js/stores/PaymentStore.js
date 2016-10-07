import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

import PaymentConstants from '../constants/PaymentConstants';

const CHANGE_EVENT = 'change';

let paymentItems = [
	{
		id: 1,
		code: '001',
		name: 'Alipay',
		img: ''
	},
	{
		id: 2,
		code: '002',
		name: 'Wechat Pay',
		img: ''
	},
	{
		id: 3,
		code: '003',
		name: 'Unionpay',
		img: ''
	}
];

let currentIndex = 0;

function selectPaymentItem(index){
	currentIndex = index;
}

const PaymentStore = Object.assign({}, EventEmitter.prototype, {

	getAllPaymentItems: function(){
		return paymentItems;
	},

	getCurrentPaymentItem: function(){
		return paymentItems[currentIndex];
	},

	getCurrentIndex: function(){
		return currentIndex;
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback){
		this.remove(CHANGE_EVENT, callback);
	}
});

/* Register callback to handle all updates */
AppDispatcher.register(function(action){
	switch(action.actionType){
		case PaymentConstants.SELECT_PAYMENT_ITEM:
			let index = action.index;
			selectPaymentItem(index);
			PaymentStore.emitChange();

			break;

		default:
			console.log('switch default');
	}
});

export default PaymentStore;