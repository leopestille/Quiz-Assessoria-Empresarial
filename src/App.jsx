import "./App.css";
import AppRoutes from "./AppRoutes";
import { Analytics } from "@vercel/analytics/react";


/**
 * The App function returns a JSX element that renders the AppRoutes component and the Analytics
 * component within a div with the className "App".
 * @returns The App component is being returned. It contains a div with the className "App" and two
 * child components - AppRoutes and Analytics.
 */
function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Analytics />
    </div>
  );
}

export default App;
