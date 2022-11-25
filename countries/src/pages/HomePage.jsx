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
`;

export const HomePage = () => {

    const [countries, setCountries] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(ALL_COUNTRIES)
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, []);

    return (
        <>
            <Controls />
            {countries.length ? (
                <List>
                    {countries.map((country) => {
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
            ) : <h1>Loading...</h1>}
        </>
    );
};