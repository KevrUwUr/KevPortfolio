import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Index} from "../Features/Index";

export const AppRoutes = () => {
    return (
        <Router>

            <Routes>
                {/* Rutas publicas */}
                {/*<Route path="*" element={<NotFoundPage />} /> /!* Página 404 *!/*/}
                {/* Ruta por defecto */}
                <Route
                    path="/app"
                    element={<Index />}
                />
            </Routes>
        </Router>
    );
};