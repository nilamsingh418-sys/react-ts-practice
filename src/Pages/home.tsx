import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
function Home() {
    const [count, setCount] = useState(0);
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Home Page </h1>
            <h2>Use Context Data : {user.name}</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Home;