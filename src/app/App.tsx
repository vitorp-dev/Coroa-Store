import { useState } from 'react';
import Login from '../components/Login';
import Ecommerce from '../components/Ecommerce';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const page = isAuthenticated ? (
    <Ecommerce onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <Login onLogin={() => setIsAuthenticated(true)} />
  );

  return (
    <div className="app-shell">
      <div className="app-shell__content">{page}</div>
      <footer className="app-footer">
        <span>© Coroa Store 2026.</span>
      </footer>
    </div>
  );
}
