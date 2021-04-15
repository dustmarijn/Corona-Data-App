import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';

export const UserContext = createContext();

export default function UserProvider({children, navigation}) {
    const [user, setUser] = useState(null);
    const [userChanged, setUserChanged] = useState(false);
    const [authDetails, setAuthDetails] = useState({
        name: 'CoronaDataApi',
        email: 'CoronaDataApi',
        password: 'CoronaDataApi',
    });

    useEffect(() => {
        if(userChanged !== false) {
            setUser(authDetails);
        }
    }, [userChanged]);

    function Login() {
        setUser(authDetails);
        setUserChanged(true);
    }

    function Logout() {
        setUser(null);
        setUserChanged(false);
        Alert.alert('Je wordt nu uitgelogd!')
    }
    return (
        <UserContext.Provider value={{user, setUser, Login, Logout}}>
            {children}
        </UserContext.Provider>
    )
}
