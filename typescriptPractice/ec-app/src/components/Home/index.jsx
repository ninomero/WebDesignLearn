import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to="/signUp">SingUp</Link>
            <br />
            <Link to="/signIn">SingIn</Link>
            <br />
            <Link to="/logOut">LogOut</Link>
            <br />
            <Link to="/edit">Edit</Link>
            <br />
            <Link to="/productList">ProductList</Link>
        </>
    )
}

export default index