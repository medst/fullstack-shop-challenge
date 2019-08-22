import React from 'react';

import AuthContext from '../context/auth';

import { Link } from 'react-router-dom'

import { Menu } from 'antd';

function Header(){

    <AuthContext.Consumer>
        {(context) => {
            return (
                <Menu style={{float: 'right'}}>
                    {context.isLogin && 
                        <Fragment>
                            <Menu.Item><Link to="/nearby">Nearby Shops</Link></Menu.Item>
                            <Menu.Item><Link to="/preferred">My preferred Shops</Link></Menu.Item>
                            <Menu.Item><Link onClick={context.logout}>Logout</Link></Menu.Item>
                        </Fragment>
                    }
                    {!context.isLogin && 
                        <Fragment>
                            <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                            <Menu.Item><Link to="/signup">Signup</Link></Menu.Item>
                        </Fragment>
                    }
                </Menu>
            );
        }}
    </AuthContext.Consumer>

}

export default Header;