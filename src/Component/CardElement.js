import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import '../Component/Card.css'
import SplitForm from './SplitForm';
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
const CardElementt = () => {
    return (
        <div className="Card-element">
            <h1>Please Pay</h1>
            <hr/>
             <Elements stripe={stripePromise}>
                <SplitForm></SplitForm>
            </Elements>
        </div>
    );
};

export default CardElementt;