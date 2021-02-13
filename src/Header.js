import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header className="header">

                <span className="header-title">
                    <img className="header-img" src="https://fontmeme.com/permalink/210212/9b950c68d9c4167ddf4ab9f8c28238f4.png" alt="pokemon-font" border="0" />
                </span>
                <ul className="nav">
                    <NavLink exact className="links" to="/">
                        Home
                    </NavLink>

                    <NavLink exact className="links" to="/search">
                        Search
                  </NavLink>
                </ul>


            </header>
        )
    }
})


