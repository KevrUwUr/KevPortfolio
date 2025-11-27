import {Component, type ReactNode} from "react";
import type {ErrorInfo} from "react-dom/client";

type Props = {
    children: ReactNode;
    fallBack?: ReactNode;
};

type State = {
    hasError: boolean;
    error?: Error;
};

export class ErrorBoundaryPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error): State {
        return {hasError: true, error};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("ErrorBoundary atrapó un error:", error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    }

    render(): ReactNode {
        const {hasError, error} = this.state;
        const {fallBack, children} = this.props;

        if (hasError) {
            return (
                fallBack || (
                    <div className="flex h-screen w-full items-center justify-center bg-black p-4">
                        <h2 className="mb-4 text-2xl font-bold text-white">
                            Algo no salio como esperabamos...
                        </h2>
                        <p className="mb-4 text-white text-center max-w-md">
                            Por favor, intenta recargar la página. Si el problema persiste, contacta al soporte.
                        </p>
                        <pre className="mb-4 max-w-full overflow-auto rounded bg-gray-800">
                            {error?.toString()}
                        </pre>
                        <button onClick={this.handleReload} className="rounded px-4 py-2 text-white">Recargar página
                        </button>
                    </div>
                )
            )
        }
        return children;
    }

}

export default ErrorBoundaryPage;