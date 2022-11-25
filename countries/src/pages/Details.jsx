import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';
import { searchByCountry } from '../config';

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

export const Details = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        fetch(searchByCountry(params.name))
            .then((res) => res.json())
            .then((data) => setCountryInfo(data[0]))
    }, []);

    const { name } = countryInfo;

    return (
        <>
            {console.log(countryInfo)}
            {!countryInfo ? <h1>Loading...</h1> : (
                <>
                    <Button onClick={() => navigate(-1)}><BiArrowBack />Back</Button> {name}


                </>
            )}
        </>
    );
};