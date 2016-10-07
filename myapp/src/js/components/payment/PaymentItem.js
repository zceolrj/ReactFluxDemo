/**
 *
 */
import React from 'react';

import PaymentAction from '../../actions/PaymentAction';

class PaymentItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PaymentItem';
    }

    selectPaytype(event){
        let index = event.target.value;

        index = parseInt(index);

        console.log('select paytype', index);

        PaymentAction.selectPaymentItem(index);
    }

    render() {
    	console.log('render payment item');

    	let paymentItem = this.props.paymentItem;
    	let index = this.props.index;
        let checked = this.props.checked;

        console.log('checked', checked);

        return (
        	<div className="row">
        		<div className="col-lg-2">
        			<img src={paymentItem.img} alt="..." />
        		</div>

        		<div className="col-lg-8">
        			<label>{paymentItem.name}</label>
        		</div>

        		<div className="col-lg-2">
        			<input type="radio" name="paytype" value={index} checked={checked} onChange={this.selectPaytype} />
        		</div>
        	</div>
        );
    }
}

export default PaymentItem;
