import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tasks' element={<ContactsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
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
