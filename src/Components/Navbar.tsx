import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#2bc6d4" }}>
            <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "black" })} to="/">Home</NavLink> |{" "}
            <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "black" })} to="/form">User Form</NavLink> |{" "}
        </nav>
    )
}

export default Navbar;