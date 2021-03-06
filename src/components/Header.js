
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Icon, Navbar } from 'react-materialize'


class Header extends Component {
    render() {
        return (

            <Navbar brand='CryptoKitties Search' className='pl-3 page-heading' options={{closeOnClick: true}} right>
                <li><NavLink to='/home' activeClassName='button-active'><Icon left={true}>home</Icon>Home</NavLink></li>
                <li><NavLink to='/sale' activeClassName=''><Icon left={true}>local_offer</Icon>Sale</NavLink></li>
                <li><NavLink to='/sire' activeClassName=''><Icon left={true}>child_friendly</Icon>Sire</NavLink></li>
                <li><NavLink to='/all' activeClassName=''><Icon left={true}>pets</Icon>All</NavLink></li>
            </Navbar>

        )
    }
}

// export default withRouter(connect(null)(Header))
export default Header
