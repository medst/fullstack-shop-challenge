import React, { useContext, useState } from 'react';

import { Form, Icon, Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import AuthContext from '../context/auth';

function FormAuth(props){

    const auth = {'login': ['Log in', 'register now!', '/signup'],
                  'signup': ['Sign up', 'login now!', '/login']};
    const url = '/api/user/';

    const context = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        props.form.validateFields((err, values) => {
            if(err)
                setLoading(false);
            fetch(url+props.type, {
                credentials: 'include',
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(values)
            }).then(response => {
                setLoading(false);
                if (!response.ok) 
                  throw new Error('Failed to fetch.')
                return response.json();
            }).then(data => {
                setLoading(false);
                if(data.status === 'ok'){
                    context.login();
                    props.history.push('/nearby');
                }
                if(data.status === 'error')
                    throw new Error(data.data);
            }).catch(err => {
                setLoading(false);
                console.log(err);
            });
        });
    };

    const { form } = props;
    const { getFieldDecorator } = form;
    return  <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        {auth[props.type][0]}
                    </Button>
                       <span className="option2">Or <Link to={auth[props.type][2]}>{auth[props.type][1]}</Link></span>
                </Form.Item>
            </Form>;

}

export default withRouter(Form.create({ name: 'authForm' })(FormAuth));