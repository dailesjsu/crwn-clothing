import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className='item-count'> 0 </span>
    </div>
);
const mapDispatchToDrops = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToDrops
)(CartIcon);