import React, { useContext,useState } from "react";
import { UserContext } from "../Contexts/UserContext";

type userDataType = {
    name: string;
    email: string;
    password: string;
};

function Form() {
    const {user} = useContext(UserContext);
    const [userData, setUserData] = useState<userDataType[]>([]);
    const [formData, setFormData] = useState<userDataType>({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUserData([...userData, formData]);
        setFormData({ name: "", email: "", password: "" });
    }

    return (
        <div>
            <h1>User Form</h1>
            <h2>Use Context Data : {user.name}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                /> <br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                /> <br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                /> <br /><br />

                <button type="submit">Submit</button>
            </form>
            {/* Show Submitted Data */}
            <h2>Submitted Users:</h2>
            {userData.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Form;