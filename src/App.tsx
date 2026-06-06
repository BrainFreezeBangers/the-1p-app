import './App.scss'
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ui/Dashboard";
import Taskboard from "./ui/Taskboard";
import Navigation from "./ui/Navigation";
import Home from "./ui/Home"


export default function App() {
    return (
        <div className="app">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tasks" element={<Taskboard />} />
            </Routes>
        </div>
    );
}
