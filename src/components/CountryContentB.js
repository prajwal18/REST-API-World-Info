import CountryContentC from "./CountryContentC";

const CountryContentB = ({country, INTEGER_FORMATTER}) => {

    //Get Native Name
    const getNatName = () => {
        if(country.name.nativeName){
            const arr = Object.keys(country.name.nativeName);
            return country.name.nativeName[arr[0]].common;
        }
        return "";
    }

    //Get Sub region
    const getSubRegion = () => {
        if(country.subregion) return country.subregion;
        return "";
    }

    //Get Capital
    const getCapital = () => {
        if(country.capital){
            const cap = country.capital.reduce((prev, current) => prev === "" ? current: prev + ", " + current, "");
            return cap;
        }
        return "";
    }
    /*--------------------------------------------------------------------------------*/


    return(
        <div className="info flex flex-wrap xl:flex-nowrap gap-12">
            <div className="info1 flex flex-col gap-2">
                <p>{"Native Name: "}<span>{getNatName()}</span></p>
                <p>{"Population: "}<span>{INTEGER_FORMATTER.format(country.population)}</span></p>
                <p>{"Region: "}<span>{country.region}</span></p>
                <p>{"Sub Region: "}<span>{getSubRegion()}</span></p>
                <p>{"Capital: "}<span>{getCapital()}</span></p>
            </div>

            <CountryContentC country={country}/>
        </div>
    );
}

export default CountryContentB;