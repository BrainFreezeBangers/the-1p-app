import Navbar from "../components/Navbar";
import NavLink from "../components/NavLink";

export default function Navigation() {
    return (
        <Navbar items={[
            <NavLink to="/" name="Home"/>,
            <NavLink to="/dashboard" name="Dashboard"/>,
            <NavLink to="/tasks" name="Tasks"/>
        ]}/>
    )
}