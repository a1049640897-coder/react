import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import List from "@/views/list"
import SingeList from "@/views/list/components/singeList.jsx"
// 

const App = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/"  element={<List />}></Route>
                <Route path="/posts/:id"  element={<SingeList />}></Route>
            </Routes>
        </BrowserRouter> 
    )
}

export default App