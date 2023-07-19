import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
};

export default RedirectLogin;
