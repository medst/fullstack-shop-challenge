import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Form from './components/form';
import ShopCard from './components/shopCard';
import Login from './pages/login';
import SignUp from './pages/signup';
import Preferred from './pages/preferred';
import NearBy from './pages/nearby';

import { Layout } from 'antd';

import './App.css';

const Context = React.createContext();

function App() {
  return (
    <Context.Provider value={ { value: state.value, updateState } }>
      <Router>
        <Layout>
          <Layout.Header>
        
          </Layout.Header>
          <Layout.Content>
            <Route path="/" exact component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
          </Layout.Content>
          <Layout.Footer>
            
          </Layout.Footer>
        </Layout>
      </Router>
    </Context.Provider>
  );
}

export default App;
