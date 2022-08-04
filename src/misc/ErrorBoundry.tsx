import React from "react";

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundry extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// update state so the next render will show the fallback UI
		return { hasError: true };
	}

	componentDidCatch(error: Error, erroInfo: React.ErrorInfo) {
		console.log(error, erroInfo.componentStack);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundry;
