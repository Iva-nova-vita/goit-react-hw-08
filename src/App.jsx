import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
          <Route path='/register' element={<RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />} />
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              background: 'green',
              color: '#fff',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
    </Layout>
  );
}

export default App;
