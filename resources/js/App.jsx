import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layout/index";
import { routes } from "../routes/index";
import { Container } from "react-bootstrap";
import "../css/app.css"

export default function App() {
    return (
        <div>
            <Container fluid>
                <Layout>
                    <Routes>
                        {Object.keys(routes).map((route) => (
                            <Route
                                key={parseInt(routes[route].id)}
                                element={routes[route].element}
                                path={routes[route].path}
                            />
                        ))}
                    </Routes>
                </Layout>
            </Container>
        </div>
    );
}

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(
        <>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </>
    );
}
