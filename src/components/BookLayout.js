import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaUserLarge } from 'react-icons/fa6';

export default function BookLayout() {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';
  return (
    <>
      <nav className={isHomeRoute ? 'books-section' : 'nav-category'}>
        <span className={isHomeRoute ? 'icon' : 'icon-category'}>
          Bookstore  CMS
        </span>
        <ul>
          <li className="books"><NavLink to="/" className="nav-link books">Books</NavLink></li>
          <li className="categories"><NavLink to="category" className="nav-link categories">Categories</NavLink></li>
        </ul>
        <div className="pp-conatiner">
          <FaUserLarge className="profile-picture" />
        </div>
      </nav>
      <Outlet />
      <footer />
    </>
  );
}
