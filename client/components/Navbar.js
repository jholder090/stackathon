import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  let user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="navbar">
      <h1>NOTAKR</h1>
      <nav>
        {isLoggedIn ? (
          <>
            <div className="navAuth">
              <p>Welcome {user.username}!</p>
              {/* The navbar will show these links after you log in */}
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
            <a>All Notes</a>
            <a>Notebooks</a>
          </>

        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
