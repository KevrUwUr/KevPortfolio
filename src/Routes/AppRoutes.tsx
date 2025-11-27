import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Index} from "../Features/Index";
import {NotFoundPage} from "../Features/NotFoundPage/NotFoundPage.tsx";
import {ErrorBoundaryPage} from "../Features/ErrorBoundary/ErrorBoundary.tsx";

export const AppRoutes = () => {
    return (
        <Router>
            <ErrorBoundaryPage>
                <Routes>
                    {/* Rutas publicas */}
                    <Route path="*" element={<NotFoundPage/>}/> {/* Página 404 */}
                    {/* Ruta por defecto */}
                    <Route
                        path="/app"
                        element={<Index/>}
                    />
                </Routes>
            </ErrorBoundaryPage>
        </Router>
    );
};