import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from 'Redux/cart.selectors'
import { clearCart } from 'Redux/cart.actions'
import { CheckoutItem, CustomButton } from 'Components'

const CheckoutPage = ({ cartItems, cartTotal, clearCart }) => (
  <div className="container py-5">
    <div className="checkout-item">
      <div className="row">
        <div className="col-2">IMAGE</div>
        <div className="col-3">NAME</div>
        <div className="col-3">QUANTITY</div>
        <div className="col-2 text-end">PRICE</div>
        <div className="col-2 text-end">DELETE</div>
      </div>
    </div>
    {
      cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    }
    <div className="row justify-content-center pt-5">
      <div className="col-12">
        <div className="display-6 text-center mb-5">
          TOTAL: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cartTotal)}
        </div>
      </div>
      <div className="col-auto">
        <CustomButton onClick={clearCart}>
          CLEAR ALL
        </CustomButton>
      </div>
    </div>
  </div>
)

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

const mapDispatch = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(mapState, mapDispatch)(CheckoutPage)
