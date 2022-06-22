import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

import { Link, useParams } from "react-router-dom"; 
import { BsArrowLeft } from "react-icons/bs";
import NotFoundPage from "./NotFoundPage";
import CountryContent from "./CountryContent";



const CountryPage = () => {
    const params = useParams();
    const {allData, INTEGER_FORMATTER, codeCountry, error } = useContext(DataContext);
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const country = allData.filter(item => item.cca3.toLowerCase() === params.countryId.toLowerCase());
        country.length === 1? setCountryData(country[0]): setCountryData(null);
    }, [allData, params.countryId]);


    return(
        <main className="flex flex-col gap-16 sm:px-12 px-4">
            {
                allData.length !== 0?
                    <>
                        {
                            countryData?
                                <>
                                    <div className="go-back flex justify-start">
                                        <Link to="/"
                                            className="btn block rounded px-8 py-3 flex gap-2 items-center justify-center"
                                        >
                                            <BsArrowLeft/>
                                            Back
                                        </Link>
                                    </div>

                                    <CountryContent 
                                        country={countryData} 
                                        INTEGER_FORMATTER={INTEGER_FORMATTER} 
                                        codeCountry={codeCountry}
                                    />
                                </>:
                                <NotFoundPage />
                        }
                    </>:
                    <>
                        {
                            !error?
                            <p>Loading ...</p>:
                            <p>Error Loading Data</p>
                        }
                    </>
            }
        </main>
    );
}

export default CountryPage;