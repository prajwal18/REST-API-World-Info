import DataProvider from "./context/DataContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CountryPage from "./components/CountryPage";
import NotFoundPage from "./components/NotFoundPage";

/* Importing React icons */
import {BsMoon, BsMoonFill} from "react-icons/bs";


function App() {
    const [darkMode, setDarkMode] = useState(true);
    return(
        <div className={`App ${darkMode? 'dark-bg': 'light-bg'}`}>
            <nav className="flex justify-center">
                <div className="inner-container flex justify-between items-center gap-4 py-2 px-4 sm:px-12 sm:py-4">
                    <h2 className="text-xl sm-text-2xl">Where in the world?</h2>
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex text-sm justify-center gap-2 items-center"
                    >
                        {darkMode? <BsMoonFill /> : <BsMoon />}
                        <p className="sm:text-base text-sm">
                            Dark Mode
                        </p>
                    </button>
                </div>
            </nav>

            <DataProvider>
                <Routes>
                    <Route path="/:countryId" element={<CountryPage />} />
                    <Route index element={<HomePage />} />
                    <Route path="/*" element={
                        <main className="flex flex-col gap-16 sm:px-12 px-4">
                            <NotFoundPage />
                        </main>
                    } />
                </Routes>
            </DataProvider>
        </div>
    );
}

export default App;