import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import store from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor } from './store/store';
import ErrorBoundary from './pages/ErrorBoundary.tsx';

// import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>

  // </React.StrictMode>
);
