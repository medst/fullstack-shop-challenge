import React, {useState} from 'react';

import AuthContext from '../context/auth';


function Wrapper(props){

    const [islogin, setLogin] = useState(false);

    const login = () => {
        setLogin(true);
    }

    const logout = () => {
        fetch('/api/user/logout',{method: 'post'})
        .then(response => {
        if (!response.ok) 
            throw new Error('Failed to fetch.')
        return response.json();
        }).then(data => {
            if(data.status === 'ok')
            setLogin(false);
            if(data.status === 'error')
                throw new Error(data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    return <AuthContext.Provider value={{isLogin: islogin, login: login, logout: logout}}>
                {props.children}
            </AuthContext.Provider>;

}

export default Wrapper;