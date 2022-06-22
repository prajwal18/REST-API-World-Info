import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SearchFilter from "../components/SearchFilter";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const { filteredData, INTEGER_FORMATTER, error } = useContext(DataContext);
    const navigate = useNavigate();

    //Get Capital
    const getCapital = (country) => {
        if (country.capital) {
            const cap = country.capital.reduce((prev, current) => prev === "" ? current : prev + ", " + current, "");
            return cap;
        }
        return "";
    }


    return (
        <main className="flex flex-col gap-16 sm:px-12 px-4">
            <SearchFilter />
            {
                filteredData.length !== 0 ?
                    <div
                        className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-between gap-12 sm:gap-4 xl:gap-12"
                    >
                        {
                            filteredData.map((country, index) => (
                                <div
                                    key={index}
                                    className="element ind-country w-full rounded flex flex-col"
                                    onClick={() => navigate(`/${country.cca3}`)}
                                >
                                    <div className="image-container">
                                        <img src={country.flags.svg} alt="country flag" />
                                    </div>

                                    <div className="grow"></div>

                                    <div className="info p-6">
                                        <h2 className="text-xl">{country.name.common}</h2>
                                        <p className="mt-3">{`Population : ${INTEGER_FORMATTER.format(country.population)}`}</p>
                                        <p>{`Region : ${country.region}`}</p>
                                        <p>{`Capital : ${getCapital(country)}`}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
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

export default HomePage;