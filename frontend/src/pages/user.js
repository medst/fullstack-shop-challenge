import React from 'react';

import { Card } from 'antd';
import FormAuth from '../components/form'

function User(props){

    return <Card style={{maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                <FormAuth type={props.type}/>
            </Card>;

}

export default User;