import React, {useContext} from 'react';
import {HospitalApiContext} from '../Providers/HospitalApiProvider';

export default function ApiHospital() {
    return useContext(HospitalApiContext);
}
