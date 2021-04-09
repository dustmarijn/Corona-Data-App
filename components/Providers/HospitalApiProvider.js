import React, {createContext, useState, useEffect} from 'react';

export const HospitalApiContext = createContext();

export default function HospitalApiProvider({children}) {
    const [hospitalData, setHospitalData] = useState(null);

    useEffect(() => {
        fetch('https://data.rivm.nl/covid-19/COVID-19_aantallen_gemeente_per_dag.json')
            .then((response) => response.json())
            .then(data => setHospitalData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <HospitalApiContext.Provider value={{hospitalData}}>
            {children}
        </HospitalApiContext.Provider>
    )
}