import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = props => {
    const { context, history } = props;
    const getClassName = pathname => (
       `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
   )

    return (
        <div className={`main-nav main-nav--${context}`}>
            <NavLink className={getClassName('/')} to="/varela">Varela</NavLink>
            <NavLink className={getClassName('/activité')} exact to="/activité">Activité</NavLink>
            <NavLink className={getClassName('/folio')} exact to="/folio">Folio</NavLink>
            <NavLink className={getClassName('/boutique')} exact to="/boutique">Boutique</NavLink>
        </div>
    )
}

export default withRouter(Nav)
