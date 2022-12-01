import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from 'Redux/user.selectors'
import { selectCartHidden } from 'Redux/cart.selectors'
import { auth } from 'Firebase/firebase.utils'
import { CartDropdown, CartIcon } from 'Components'

const Tabs = ({ currentUser, hidden }) => (
  <div className="react-pills">
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/store" activeClassName="active">Store</NavLink>
    {
      currentUser
      ? <a onClick={() => auth.signOut()}>Logout</a>
      : (
        <>
          <NavLink exact to="/login" activeClassName="active">Login</NavLink>
          <NavLink exact to="/register" activeClassName="active">Register</NavLink>
        </>
      )
    }
    <NavLink exact to="/about" activeClassName="active">About</NavLink>
    <CartIcon />
    {
      hidden
      ? null
      : <CartDropdown />
    }
  </div>
)

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapState)(Tabs)
