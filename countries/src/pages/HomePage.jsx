import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Controls } from '../components/Controls';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ALL_COUNTRIES } from '../config';

const Button = styled.button`
    border: none;
    padding: 0;
    border-radius: var(--radii);
    text-align: start;
`;

export const HomePage = ({ setCountries, countries }) => {

    const navigate = useNavigate();

    const [filtredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        };

        if (search) {
            data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
        };

        setFilteredCountries(data);
    };

    useEffect(() => {
        fetch(ALL_COUNTRIES)
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            {console.log('Filtred: ' + countries)}
            <List>
                {!countries.length ? <h1>Loading...</h1> : filtredCountries.map((country) => {
                    const countryInfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: country.region,
                            },
                            {
                                title: 'Capital',
                                description: country.capital,
                            },
                        ],
                    };

                    return (
                        <Button onClick={() => navigate(`/country/${country.name}`)}>
                            <Card key={country.name} {...countryInfo} />
                        </Button>
                    )
                })}
            </List>
        </>
    );
};