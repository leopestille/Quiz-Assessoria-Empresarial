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
 * The AppRoutes function defines the routes for a React application using React Router.
 * @returns The AppRoutes component is returning a Router component from React Router. Inside the
 * Router component, there are multiple Route components defined. Each Route component specifies a path
 * and an element to render when that path is matched. The elements being rendered are various
 * pages/components wrapped in different providers.
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
