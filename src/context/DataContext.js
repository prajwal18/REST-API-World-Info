import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";


/*-----------Start of The code-----------*/
export const DataContext = createContext({});

const URL = "https://restcountries.com/v3.1/all";
const URLC = "https://restcountries.com/v3.1/alpha/"; // Need to add the country code cca3 at the end

const DataProvider = ({children}) =>{
    const [allData, setAllData] = useState([]);
    const [filter, setFilter] = useState("");
    const [region, setRegion] = useState("");
    const [toggle, setToggle] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [codeCountry, setCodeCountry] = useState({});
    const [error, setError] = useState(false);

    const REGIONS = ["all", "africa","america","asia","europe","oceania"];

    const fetchData = useCallback(async () => {
        try{
            const { data } = await axios.get(URL);
            setAllData(data);
        } catch (e) {
            setError(true);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if(allData !== 0) {
            let newObj = {};
            allData.forEach(item => {
                newObj[item.cca3] = item.name.common;
            });

            setCodeCountry(newObj);
        }
    }, [allData]);

    useEffect(() => {
        if (allData.length !== 0){
            if(region === "all"){
                setFilteredData(allData.filter(item => item.name.common.includes(filter)));
            }else{
                const newData = allData.filter(item => item.name.common.includes(filter) && item.region.toLowerCase().includes(region));
                setFilteredData(newData);
            }
        }
    }, [region, filter, allData]);

    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {maximumFractionDigits: 0});

    return(
        <DataContext.Provider value={{
            URLC, allData, INTEGER_FORMATTER,
            codeCountry, filter, setFilter,
            filteredData, REGIONS, region, setRegion,
            toggle, setToggle, error
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;