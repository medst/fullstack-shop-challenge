import React from 'react';

export default React.createContext({
  isLogin: null,
  login: () => {},
  logout: () => {},
});