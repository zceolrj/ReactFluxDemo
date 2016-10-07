/**
 *
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import PaymentConstants from '../constants/PaymentConstants';

const PaymentAction = {
	selectPaymentItem: function(index){
		console.log('PaymentAction selectPaymentItem', index);

		AppDispatcher.dispatch({
			actionType: PaymentConstants.SELECT_PAYMENT_ITEM,
			index: index
		});
	}
}

export default PaymentAction;