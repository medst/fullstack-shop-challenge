import React, { useContext } from 'react';

import AuthContext from '../context/auth';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

function Header(){

    const context = useContext(AuthContext);
    
    const nav = () => {
        if(context.isLogin)
            return <Menu theme="dark" mode="horizontal" style={{float: 'right', lineHeight: '64px'}}>
                        <Menu.Item><Link to="/nearby">Nearby</Link></Menu.Item>
                        <Menu.Item><Link to="/preferred">preferred Shops</Link></Menu.Item>
                        <Menu.Item onClick={context.logout}>Logout</Menu.Item>
                    </Menu>;
        else
            return <Menu theme="dark" mode="horizontal" style={{float: 'right', lineHeight: '64px'}}>
                        <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item><Link to="/signup">Signup</Link></Menu.Item>
                    </Menu>;
    }

    return  nav();

}

export default Header;