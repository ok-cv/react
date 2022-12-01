import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from 'Redux/cart.actions'
import { selectCartItemsCount } from 'Redux/cart.selectors'

import './CartIcon.css'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <a onClick={toggleCartHidden}>
    Cart: {itemCount}
  </a>
)

const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatch = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapState, mapDispatch)(CartIcon)
