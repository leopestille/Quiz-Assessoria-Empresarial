import "./App.css";
import AppRoutes from "./AppRoutes";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <AppRoutes />      
    </div>
  );
}

export default App;
