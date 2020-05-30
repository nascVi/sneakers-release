import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = props => {
    const { context, history } = props;
    const getClassName = pathname => (
       `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
   )

    return (
        <div className={`main-nav main-nav--${context}`}>
            <NavLink className={getClassName('/')} to="/shoesone">Shoesone</NavLink>
            <NavLink className={getClassName('/activité')} exact to="/sav">La Boutique</NavLink>
            <NavLink className={getClassName('/folio')} exact to="/custom">Custom</NavLink>
            <NavLink className={getClassName('/boutique')} exact to="/boutiques">SAV</NavLink>
        </div>
    )
}

export default withRouter(Nav)
