import React from "react";
import PropTypes from 'prop-types';


class ErrorBoundary extends React.Component {

	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}


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

ErrorBoundary.propTypes = {
	children: PropTypes.node,
}

export default ErrorBoundary;
