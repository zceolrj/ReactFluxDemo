/**
 *
 */
import React from 'react';

import PaymentItem from './PaymentItem';

class PaymentList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PaymentList';
    }

    render() {
    	console.log('render payment list');

    	let paymentItems = this.props.paymentItems;
        let currentIndex = this.props.currentIndex;

        console.log('currentIndex', currentIndex);

    	let paymentItemList = [];

    	paymentItems.forEach(function(elem, index){
            let checked = (index === currentIndex);
            console.log('index=%s, currentIndex=%s, checked=%s', index, currentIndex, checked);
    		let paymentItem = <li key={elem.id}><PaymentItem paymentItem={elem} index={index} checked={checked}/></li>;

    		paymentItemList.push(paymentItem);
    	});

        return (
        	<div>
        		<ul id="paymentItemList">{paymentItemList}</ul>
        	</div>
        );
    }
}

PaymentList.propTypes = {
    currentIndex: React.PropTypes.number
};

export default PaymentList;
