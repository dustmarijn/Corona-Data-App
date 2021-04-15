import React, {useContext} from 'react';
import {DataApiContext} from '../Providers/DataApiProvider';

export default function ApiData() {
    return useContext(DataApiContext);
}
