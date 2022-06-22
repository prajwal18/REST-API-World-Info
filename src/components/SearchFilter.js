import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { BiCheck, BiSearchAlt2 } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";



const DropDown = ({toggle, REGIONS, region, setRegion }) => {
    if(!toggle){
        return null;
    } else {
        
        return (
        <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu"
            className="drop-down w-full rounded absolute top-14 px-4 py-2 capitalize flex flex-col gap-1 text-sm"
        >
            {
                REGIONS.map((item,index) => {
                    return(
                        <div
                            key={index}
                            onClick={() => setRegion(item)}
                            role="menuitem"
                            className="flex w-full justify-between items-center"
                        >
                            <p className="cursor-pointer">{item}</p>
                            {region === item? <BiCheck /> : null }
                        </div>
                    )
                })
            }
        </div>);
    }
}


const SearchFilter = () => {
    const {toggle, setToggle, filter, setFilter, region, setRegion, REGIONS} = useContext(DataContext);
    return (
        <div 
            className="search-filter flex flex-wrap md:flex-nowrap gap-6 md:gap-12 justify-between"
        >
            <div className="element rounded pl-4 flex gap-2 items-center">
                <label htmlFor="search" className="input-label">Search Country</label>
                <BiSearchAlt2 className="text-xl"/>
                <input 
                    className="p-2 text-base rounded h-12 grow"
                    name="search" 
                    type="text" 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <div 
                className="relative"
            >
                <button 
                    onClick={() => setToggle(!toggle)}
                    className="btn flex h-12 px-4 items-center justify-between gap-12 rounded"
                >
                    <p>Filter by region</p>
                    <BsChevronDown />
                </button>
                <DropDown 
                    toggle={toggle}
                    REGIONS={REGIONS}
                    region={region}
                    setRegion={setRegion}
                />
            </div>

        </div>
    );
}

export default SearchFilter;