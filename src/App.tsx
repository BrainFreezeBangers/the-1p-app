import Checklist from "./components/Checklist";
import Navbar from "./components/Navbar";
import './App.scss'


export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Checklist/>
        </div>
    );
}
