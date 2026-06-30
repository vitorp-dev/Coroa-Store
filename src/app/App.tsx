import { useEffect, useState } from 'react';
import Login from '../components/Login';
import Ecommerce from '../components/Ecommerce';
import ComercialPedidos from '../components/ComercialPedidos';
import { initialTrackedOrders } from '../components/AcompanhamentoPedidos';

type AuthenticatedUser = {
  email: string;
  name: string;
  password: string;
  role: 'cliente' | 'comercial' | 'admin';
};

const TRACKED_ORDERS_STORAGE_KEY = 'coroa-store-tracked-orders';

function readTrackedOrdersFromStorage() {
  if (typeof window === 'undefined') {
    return initialTrackedOrders;
  }

  try {
    const storedOrders = window.localStorage.getItem(TRACKED_ORDERS_STORAGE_KEY);

    if (!storedOrders) {
      return initialTrackedOrders;
    }

    const parsedOrders = JSON.parse(storedOrders);
    return Array.isArray(parsedOrders) ? parsedOrders : initialTrackedOrders;
  } catch {
    return initialTrackedOrders;
  }
}

export function App() {
  const [currentUser, setCurrentUser] = useState<AuthenticatedUser | null>(null);
  const [trackedOrders, setTrackedOrders] = useState(readTrackedOrdersFromStorage);

  useEffect(() => {
    window.localStorage.setItem(TRACKED_ORDERS_STORAGE_KEY, JSON.stringify(trackedOrders));
  }, [trackedOrders]);

  useEffect(() => {
    function syncTrackedOrders(event: StorageEvent) {
      if (event.key !== TRACKED_ORDERS_STORAGE_KEY) {
        return;
      }

      setTrackedOrders(readTrackedOrdersFromStorage());
    }

    window.addEventListener('storage', syncTrackedOrders);

    return () => window.removeEventListener('storage', syncTrackedOrders);
  }, []);

  const page = currentUser ? (
    currentUser.role === 'cliente' ? (
      <Ecommerce
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
        trackedOrders={trackedOrders}
        setTrackedOrders={setTrackedOrders}
      />
    ) : (
      <ComercialPedidos
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
        trackedOrders={trackedOrders}
        setTrackedOrders={setTrackedOrders}
      />
    )
  ) : <Login onLogin={setCurrentUser} />;

  return (
    <div className="app-shell">
      <div className="app-shell__content">{page}</div>
      <footer className="app-footer">
        <span>© Coroa Store 2026.</span>
      </footer>
    </div>
  );
}
