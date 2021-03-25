import React, {createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // setUser({name: 'Jens Bouma', email: 'jensmbouma@kpnmail.nl'})
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
