import React from "react";

/* The code is defining a React component called `ErrorBoundary`. This component is used to catch and
handle errors that occur within its child components. */
class ErrorBoundary extends React.Component {
  /**
   * The constructor function initializes the state of the component with properties for error
   * handling.
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /**
   * The function returns an object with the properties "hasError" set to true and "error" set to the
   * provided error parameter.
   * @returns An object with two properties: "hasError" and "error". The value of "hasError" is set to
   * true, indicating that an error has occurred. The value of "error" is set to the error object that
   * was passed as an argument to the function.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Erro, verifique as informações a seguir para mais detalhes:</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
