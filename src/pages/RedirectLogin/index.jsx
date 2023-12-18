import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
