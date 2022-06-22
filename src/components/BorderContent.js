import { Link } from "react-router-dom"

const BorderContent = ({country, codeCountry }) => {
    //Get Border List
    const getBorders = () => {
        if(country.borders){
            let border = country.borders.map(item => item.toLowerCase());
            return border;
        }

        return [];
    }
    /*----------------------------------*/


    return(
    <div className="border-list flex gap-4 mt-8">
        <p>Borders: </p>
        {
            getBorders().length !== 0 ?
            <div className="flex flex-wrap gap-2 ">
                {
                    getBorders().map((item, index) => {
                        return(
                            <Link to={`/${item}`} key={index}
                                className="btn rounded text-center text-xs px-4 py-1"
                            >
                                {codeCountry[item.toUpperCase()]}
                            </Link>
                        );
                    })
                }
            </div>:
            <p>None</p>
        }
    </div>
    );
}

export default BorderContent;