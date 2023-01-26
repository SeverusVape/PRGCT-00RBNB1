import "./index.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "./pages";
import Layout from "./components/Layout";
import axios from "axios";
import { UserContextProvider } from "./components/UserContext";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
