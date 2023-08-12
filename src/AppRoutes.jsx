import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/index.jsx";
import QuizPage from "./pages/QuizPage/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import ForgotPage from "./pages/ForgotPage/index.jsx";
import RedirectLogin from "./pages/RedirectLogin/index.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage/index.jsx";
import { QuizProvider } from "./context/quiz.jsx";
import { AuthProvider } from "./context/auth.jsx";

/**
  * A função AppRoutes define as rotas para um aplicativo React usando o React Router.
  * @returns O componente AppRoutes está retornando um componente Router do React Router. Dentro de
  * Componente de roteador, existem vários componentes de rota definidos. Cada componente de rota especifica um caminho
  * e um elemento a ser renderizado quando esse caminho for correspondido. Os elementos que estão sendo renderizados são vários
  * páginas/componentes agrupados em diferentes provedores.
  */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <AuthProvider>
              <LoginPage />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <AuthProvider>
              <RegisterPage />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/quiz"
          element={
            <AuthProvider>
              <QuizProvider>
                <QuizPage />
              </QuizProvider>
            </AuthProvider>
          }
        />
        <Route exact path="/forgot-password" element={<ForgotPage />} />
        <Route path="/" element={<RedirectLogin />} />
        <Route path="/reset/:token" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
