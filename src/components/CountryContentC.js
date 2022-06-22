
const CountryContentC = ({country}) => {

    //Get Top level Domain
    const getTld = () => {
        if(country.tld){
            return country.tld.reduce((prev, current) => prev === "" ? current: prev + ", " + current, "");
        }
        return "";
    }

    //Get Currencies
    const getCurrencies = () =>{
        if(country.currencies){
            const currenLL = Object.keys(country.currencies);
            const current = currenLL.length === 1? country.currencies[currenLL[0]].name : multipleCurren(currenLL, country.currencies);
            return current
        }
        return "";
    }
    const multipleCurren = (curList,obj) => {
        let curren = "";
        curList.forEach((keyy, index) => {
            if(index === (curList.length - 1)){
                curren += obj[keyy].name;
            } else {
                curren += obj[keyy].name + ", "
            }
        });
        return curren;
    }

    //Get Languages
    const getLanguages = () => {
        if(country.languages){
            const keys = Object.keys(country.languages);
            let langs= "";

            keys.forEach((key, index) => {
                if(keys.length === (index +1)){
                    langs += country.languages[key];
                }else{
                    langs += country.languages[key] + ", ";
                }
            })

            return langs;
        }
        return "";
    }
    /*----------------------------------------------------------------*/

    return(
        <div className="info2 flex flex-col gap-2">
            <p>{`Top Level Domain: `}<span>{getTld()}</span></p>
            <p>{`Currencies : `}<span>{getCurrencies()}</span></p>
            <p>{`Languages : `}<span>{getLanguages()}</span></p>
        </div>
    );
}

export default CountryContentC;