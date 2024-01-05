import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import { Container } from './Layout.styled';

import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" hideProgressBar theme="colored" />
    </Container>
  );
};
