import React, { useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { ALL_COUNTRIES } from "../config";
import { ICountry } from "src/interfaces/country.interface";
import { HomePageProps } from "src/interfaces/homePage.props";

const Button = styled.button`
    border: none;
    padding: 0;
    border-radius: var(--radii);
    text-align: start;
`;

export const HomePage = ({
    setCountries,
    countries,
}: HomePageProps): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const [filtredCountries, setFilteredCountries] =
        useState<ICountry[]>(countries);

    const handleSearch = (search: string, region: string) => {
        let data: ICountry[] = countries;

        if (region) {
            data = data.filter((country: ICountry) =>
                country.region.includes(region)
            );
        }

        if (search) {
            data = data.filter((country: ICountry) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        fetch(ALL_COUNTRIES)
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    useEffect(() => {
        handleSearch("", "");
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {!countries.length ? (
                    <h1>Loading...</h1>
                ) : (
                    filtredCountries.map((country: ICountry) => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: "Population",
                                    description:
                                        country.population.toLocaleString(),
                                },
                                {
                                    title: "Region",
                                    description: country.region,
                                },
                                {
                                    title: "Capital",
                                    description: country.capital,
                                },
                            ],
                        };

                        return (
                            <Button
                                onClick={() =>
                                    navigate(`/country/${country.name}`)
                                }
                            >
                                <Card key={country.name} {...countryInfo} />
                            </Button>
                        );
                    })
                )}
            </List>
        </>
    );
};
