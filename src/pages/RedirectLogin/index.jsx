import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
  * O componente RedirectLogin redireciona o usuário para a página de login se o local atual for a raiz
  * caminho ("/").
  * @retorna null
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
