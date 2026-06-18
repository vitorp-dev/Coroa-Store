import { useState } from 'react';
import Login from '../components/Login';
import Ecommerce from '../components/Ecommerce';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <Ecommerce onLogout={() => setIsAuthenticated(false)} />;
  }

  return <Login onLogin={() => setIsAuthenticated(true)} />;
}
