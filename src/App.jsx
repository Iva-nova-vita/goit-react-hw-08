
import Layout from './components/Layout/Layout';
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import './App.css';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
 

  return (
    <Layout>
      <Suspense fallback={null}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        </Suspense>
    </Layout>
  );
}

export default App;
