import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import List from "@/views/list"

const App = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/"  element={<List />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App