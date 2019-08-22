import React, {useState} from 'react';

import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Form from './components/form';
import ShopCard from './components/shopCard';
import Header from './components/header';
import Login from './pages/login';
import SignUp from './pages/signup';
import Preferred from './pages/preferred';
import NearBy from './pages/nearby';

import { Layout } from 'antd';

import './App.css';

import AuthContext from './context/auth';

function App() {

  const [login, setLogin] = useState(false);

  login = () => {
    setLogin(true);
  }

  logout = () => {
    setLogin(false);
  }

  return (
    <AuthContext.Provider value={{isLogin: login, login: login, logout: logout}}>
      <Router>
        <Layout>
          <Layout.Header>
            <Header/>
          </Layout.Header>
          <Layout.Content>
            <Switch>
              <Route path="/" exact render={() => (
                    login ? (
                      <Redirect to="/nearby"/>
                    ) : (
                      <Redirect to="/login"/>
                    )
                  )} />
              <Route path="/nearby" component={NearBy} />
              <Route path="/preferred" component={Preferred} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="*" component={Login} />
            </Switch>
          </Layout.Content>
          <Layout.Footer>
            
          </Layout.Footer>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
