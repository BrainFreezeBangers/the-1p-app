import Checklist from "./components/Checklist";
import Navbar from "./components/Navbar";
import './App.scss'
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Taskboard from "./components/Taskboard";


export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Checklist />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tasks" element={<Taskboard />} />
            </Routes>
        </div>
    );
}
