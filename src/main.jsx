import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

/* O código está usando o método `createRoot` do ReactDOM para criar um elemento raiz no documento HTML com
o id "root". Em seguida, chama o método `render` no elemento root criado, renderizando o código JSX
dentro dele. O código JSX é agrupado em `<React.StrictMode>`, que é um wrapper apenas para o modo de desenvolvimento
que executa verificações e avisos adicionais para possíveis problemas no código. O código JSX sendo
renderizado é o componente `<App />`, que é o componente raiz do aplicativo. */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
