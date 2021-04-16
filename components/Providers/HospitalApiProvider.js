import React, {createContext, useState, useEffect} from 'react';
import localStorage from 'local-storage';

export const HospitalApiContext = createContext();

export default function HospitalApiProvider({children}) {
    const [hospitalData, setHospitalData] = useState(localStorage.get('api'));

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;

    useEffect(() => {
        if(localStorage.get('date') !== today) {
            fetch('https://data.rivm.nl/covid-19/COVID-19_aantallen_gemeente_per_dag.json')
                .then((response) => response.json())
                .then(data => {
                    localStorage.set('api2', data);
                    localStorage.set('date', today);
                    setHospitalData(localStorage.get('api2'));
                })
                .catch((error) => console.error(error));
        }
    }, []);

    return (
        <HospitalApiContext.Provider value={{hospitalData}}>
            {children}
        </HospitalApiContext.Provider>
    )
}
