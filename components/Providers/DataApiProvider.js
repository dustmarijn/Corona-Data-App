import React, {createContext, useState, useEffect} from 'react';
import localStorage from 'local-storage';

export const DataApiContext = createContext();

export default function DataApiProvider({children}) {
    const [data, setData] = useState(localStorage.get('api'));

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;

    useEffect(() => {
        if(localStorage.get('date') !== today) {
            fetch('https://data.rivm.nl/covid-19/COVID-19_uitgevoerde_testen.json')
                .then((response) => response.json())
                .then(data => {
                    localStorage.set('api', data);
                    localStorage.set('date', today);
                    setData(localStorage.get('api'));
                })
                .catch((error) => console.error(error));
        }
    }, []);


    return (
        <DataApiContext.Provider value={{data}}>
            {children}
        </DataApiContext.Provider>
    )
}
