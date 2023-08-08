import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * The RedirectLogin component redirects the user to the login page if the current location is the root
 * path ("/").
 * @returns null
 */
const RedirectLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate('/login');
    }
  }, []);

  return null;
};

export default RedirectLogin;
