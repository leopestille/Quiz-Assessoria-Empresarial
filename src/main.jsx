import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

/* The code is using ReactDOM's `createRoot` method to create a root element in the HTML document with
the id "root". It then calls the `render` method on the created root element, rendering the JSX code
inside it. The JSX code is wrapped in `<React.StrictMode>`, which is a development mode only wrapper
that performs additional checks and warnings for potential issues in the code. The JSX code being
rendered is the `<App />` component, which is the root component of the application. */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
