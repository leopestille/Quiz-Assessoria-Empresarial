import "./App.css";
import AppRoutes from "./AppRoutes";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "./components/Error/ErrorBoundary";


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
