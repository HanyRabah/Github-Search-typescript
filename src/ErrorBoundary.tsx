import React, { Component, ErrorInfo } from 'react';
import ErrorView from './pages/Error';

type State = {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log the rror somewhere ....
  }

  render() {
    if (this.state.hasError === true) {
      return <ErrorView />
    }

    return this.props.children;
  }
}
