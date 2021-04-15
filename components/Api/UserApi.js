import React, {useContext} from 'react';
import {UserContext} from '../Providers/UserProvider';

export default function UserApi() {
    return useContext(UserContext);
}
