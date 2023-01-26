import "./index.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "./pages";
import Layout from "./components/Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
