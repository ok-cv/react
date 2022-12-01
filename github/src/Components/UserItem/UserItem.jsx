import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => (
  <div className="col-12 col-lg-2">
    <div className="card">
      <img src={avatar_url} className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{login}</div>
        <Link to={`/user/${login}`} className="btn btn-sm btn-primary">Open Profile</Link>
      </div>
    </div>
  </div>
)

export default UserItem
