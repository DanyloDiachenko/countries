import React, { useEffect, useState } from "react";
import {
    useParams,
    useNavigate,
    NavigateFunction,
    Params,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

import { searchByCountry, filterByCode } from "../config";
import { ICountryInfo } from "src/interfaces/countryInfo.interface";

const Button = styled.button`
    width: 85px;
    height: 35px;
    padding: 0 15px;
    border-radius: var(--radii);
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 30px 0;
    background: var(--colors-ui-base);
    color: var(--colors-text);
    box-shadow: var(--shadow);
    cursor: pointer;
`;

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const CImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const CTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
    margin-bottom: 20px;
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media (min-width: 727px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    line-height: 1.5;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: var(--shadow);
    }
`;

export const Details = (): JSX.Element => {
    const params: Readonly<Params<string>> = useParams();
    const navigate: NavigateFunction = useNavigate();

    const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
    const [neighbors, setNeighbors] = useState<ICountryInfo[]>([]);

    useEffect(() => {
        if (params.name && params.name.length) {
            fetch(searchByCountry(params.name))
                .then((res) => res.json())
                .then((data) => setCountryInfo(data[0]));
        }
    }, [params.name]);

    useEffect(() => {
        if (countryInfo) {
            fetch(filterByCode(countryInfo.borders && countryInfo.borders))
                .then((res) => res.json())
                .then((data) => setNeighbors(data));
        }
    }, [countryInfo]);

    if (!countryInfo) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                <BiArrowBack />
                Back
            </Button>

            <Wrapper>
                <CImage src={countryInfo.flag} alt={countryInfo.name} />

                <div>
                    <CTitle>{countryInfo.name}</CTitle>
                    <ListGroup>
                        <List>
                            <ListItem>
                                <b>Native Name: </b>
                                {countryInfo.nativeName}
                            </ListItem>
                            <ListItem>
                                <b>Population: </b>
                                {countryInfo.population}
                            </ListItem>
                            <ListItem>
                                <b>Region: </b>
                                {countryInfo.region}
                            </ListItem>
                            <ListItem>
                                <b>Sub Region: </b>
                                {countryInfo.subregion}
                            </ListItem>
                            <ListItem>
                                <b>Capital: </b>
                                {countryInfo.capital}
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <b>Top Level Domain: </b>
                                {countryInfo.topLevelDomain}
                            </ListItem>
                            <ListItem>
                                <b>Currency: </b>{" "}
                                {countryInfo.currencies.map((currency) => (
                                    <span key={currency.code}>
                                        {currency.name}{" "}
                                    </span>
                                ))}
                            </ListItem>
                            <ListItem>
                                <b>Languages: </b>
                                {countryInfo.languages.map((language) => (
                                    <span key={language.name}>
                                        {language.name}{" "}
                                    </span>
                                ))}
                            </ListItem>
                        </List>
                    </ListGroup>
                    <Meta>
                        <b>Border Countries:</b>
                        {!neighbors.length ? (
                            <span>There is no border countries</span>
                        ) : (
                            <TagGroup>
                                {neighbors.map((neighbor: ICountryInfo) => (
                                    <Tag
                                        onClick={() =>
                                            navigate(
                                                `/country/${neighbor.name}`
                                            )
                                        }
                                        key={neighbor.name}
                                    >
                                        {neighbor.name}
                                    </Tag>
                                ))}
                            </TagGroup>
                        )}
                    </Meta>
                </div>
            </Wrapper>
        </>
    );
};
