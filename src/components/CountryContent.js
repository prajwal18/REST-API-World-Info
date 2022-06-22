import BorderContent from "./BorderContent";
import CountryContentB from "./CountryContentB";


const CountryContent = ({country, INTEGER_FORMATTER, codeCountry}) => {
    return(
        <div className="country-content mt-2 flex flex-wrap lg:flex-nowrap justify-center gap-12">
            <div className="image-part">
                <img src={country.flags.svg} className="w-full block" alt="country flag" />
                {console.log(country.flags.svg)}
            </div>

            <div className="country-info flex flex-wrap justify-center lg:flex-nowrap flex-col gap-6">
                <h2 className="big text-2xl lg:text-3xl mb-2">{country.name.common}</h2>
                <CountryContentB country={country} INTEGER_FORMATTER={INTEGER_FORMATTER}/>
                <BorderContent country={country} codeCountry={codeCountry}/>
            </div>

        </div>
    );
}

export default CountryContent;