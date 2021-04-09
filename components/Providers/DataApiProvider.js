import React, {createContext, useState, useEffect} from 'react';

export const DataApiContext = createContext();

export default function DataApiProvider({children}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://data.rivm.nl/covid-19/COVID-19_uitgevoerde_testen.json')
            .then((response) => response.json())
            .then(data => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <DataApiContext.Provider value={{data}}>
            {children}
        </DataApiContext.Provider>
    )
}