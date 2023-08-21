import "./App.css";
import AppRoutes from "./AppRoutes";
import { Analytics } from "@vercel/analytics/react";


/**
  * A função App retorna um elemento JSX que renderiza o componente AppRoutes e o componente Analytics
  * dentro de um div com o className "App".
  * @returns O componente App está sendo retornado. Ele contém um div com o className "App" e dois
  * componentes filhos - AppRoutes e Analytics.
  */
function App() {
  return (
    <div className="App">
      <AppRoutes />      
    </div>
  );
}

export default App;
