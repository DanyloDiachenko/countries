import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { Details } from "./pages/Details";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ICountry } from "./interfaces/country.interface";

const App = (): JSX.Element => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                countries={countries}
                                setCountries={setCountries}
                            />
                        }
                    />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
};

export default App;
