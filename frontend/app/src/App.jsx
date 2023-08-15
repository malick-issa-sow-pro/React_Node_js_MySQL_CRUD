import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Read from "./Read";
import Edit from "./Edit";
import Create from "./Create";

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/read/:id" element={<Read />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
