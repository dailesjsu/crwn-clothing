import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pulishableKey = 'pk_test_51IE1wUDjGjS2lNyCGUumdmXA00e46vWPjGyqcwFQtz6C2hZQN2DJiPaI3f5jWaTikk01YPM890EjKWFq2wRbOPap00sijky8WC'


    return (
        <StripeCheckout
            label='Pay Now'
            name = 'DNL Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {` Please Pay : $${price}`} 
            amount={priceForStripe}
            panelLabel='Agree To Pay'
            token={onToken}
            stripeKey={pulishableKey}
        />
    );
};

export default StripeCheckoutButton;