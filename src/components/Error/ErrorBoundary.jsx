import React from "react";

/* O código está definindo um componente React chamado `ErrorBoundary`. Este componente é usado para capturar e
lidar com erros que ocorrem dentro de seus componentes filhos. */
class ErrorBoundary extends React.Component {
	/**
	 * A função construtora inicializa o estado do componente com propriedades para erro
   * */
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	/**
	 * A função retorna um objeto com as propriedades "hasError" definidas como true e "error" definidas como
	 * parâmetro de erro fornecido.
	 * @returns Um objeto com duas propriedades: "hasError" e "error". O valor de "hasError" é definido como
	 * verdadeiro, indicando que ocorreu um erro. O valor de "error" é definido para o objeto de erro que
	 * foi passado como um argumento para a função.
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
