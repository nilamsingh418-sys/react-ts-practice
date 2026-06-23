import { createContext, useState } from 'react';
import type {ReactNode } from 'react';

type User = {   
    name: string;
    age: number;
};

type UserContextType = {
    user:User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const defaultUser: UserContextType = {
    user: { name: "Nilam", age: 30 },
    setUser: () => {},
}

export const UserContext = createContext<UserContextType>(defaultUser);

export const UserProvider = ({ children } : { children: ReactNode}) => {
    const [user, setUser] = useState({ name: "Nilam", age: 30 });    

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;