import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  return (
    <div>
      <NavBar /> {/* NavBar will appear on every page */}
      <main>
        <Outlet /> {/* This will render the child routes (pages) */}
      </main>
    </div>
  );
};

export default Layout;