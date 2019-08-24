import React from 'react';

import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import User from './pages/user';
import Shops from './pages/shops';

import Wrapper from './components/appWrapper';

import { Layout } from 'antd';

import './App.css';

import AuthContext from './context/auth';

function App() {
 
  return (
    <Wrapper>
      <Router>
        <Layout>
          <Layout.Header>
            <Header/>
          </Layout.Header>
          <Layout.Content style={{padding: '20px 50px'}}>
            <AuthContext.Consumer>
              {(context) =>  (
                <Switch>
                  <Route path="/" exact render={() => (
                        context.isLogin ? (
                          <Redirect to="/nearby"/>
                        ) : (
                          <Redirect to="/login"/>
                        )
                      )} />
                  <Route path="/preferred" render={() => (
                        context.isLogin ? (
                          <Shops type="preferred"/>
                        ) : (
                          <Redirect to="/login"/>
                        )
                      )} />
                  <Route path="/nearby" render={() => (
                        context.isLogin ? (
                          <Shops type="nearby"/>
                        ) : (
                          <Redirect to="/login"/>
                        )
                      )} />
                  <Route path="/login" render={() => <User type="login"/> } />
                  <Route path="/signup" render={() => <User type="signup"/> } />
                  <Route path="*" render={() => <User type="login"/> } />
                </Switch>
              ) }
            </AuthContext.Consumer>
          </Layout.Content>
          <Layout.Footer>
            
          </Layout.Footer>
        </Layout>
      </Router>
    </Wrapper>
  );
}

export default App;
