/**
 *
 */
import React from 'react';

import PaymentList from './PaymentList';

import PaymentStore from '../../stores/PaymentStore';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Payment';

        this.state = this.getPaymentState();
        this.state.showMore = false;

        this.payment = this.payment.bind(this);

        this.getPaymentState = this.getPaymentState.bind(this);
        this._onChange = this._onChange.bind(this);
        this.payment = this.payment.bind(this);
        this.showMoreItems = this.showMoreItems.bind(this);
    }

    componentDidMount(){
        console.log('Payment did mount');

        PaymentStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        console.log('Payment will unmount');

        PaymentStore.removeChangeListener(this._onChange);
    }

    getPaymentState(){
        console.log('trye to get payment state');

        return {
            paymentItems: PaymentStore.getAllPaymentItems(),
            currentPaymentItem: PaymentStore.getCurrentPaymentItem(),
            currentIndex: PaymentStore.getCurrentIndex()
        }
    }

    _onChange(){
        console.log('Payment _onChange');

        this.setState(this.getPaymentState());
    }

    payment(event) {
    	console.log('payment');

        console.log(this.state.currentPaymentItem);
    }

    showMoreItems(){
        this.setState({
            showMore: true
        })
    }

    render() {
        var showMoreItem = <button type="button" className="btn btn-default" onClick={this.showMoreItems}>Show More</button>;
        var moreItems = <label>There are more payment</label>;

        return (
        	<div>
        		{/* payment type*/}
        		<div>
        			<PaymentList paymentItems={this.state.paymentItems} currentIndex={this.state.currentIndex} />
        		</div>

                {this.state.showMore ? moreItems : showMoreItem}

        		<div>
        			<label>Total: </label>
        			<button type="button" className="btn btn-info" onClick={this.payment}>Payment</button>
        		</div>
        	</div>
        );
    }
}

Payment.propTypes = {
    currentIndex: React.PropTypes.number
}

Payment.defaultProps = {

}

export default Payment;
