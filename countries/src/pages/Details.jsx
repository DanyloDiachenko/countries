import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchByCountry } from '../config';

export const Details = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        fetch(searchByCountry(params.name))
            .then((res) => res.json())
            .then((data) => setCountryInfo(data[0]))
    }, []);

    return (
        <>
            <h1>Details:</h1>
            {console.log(countryInfo)}
            {!countryInfo ? <h1>Loading...</h1> : (
                <>
                    <h2>{countryInfo.name}</h2>
                    <img src={countryInfo.flags.png} />
                    <button onClick={() => navigate(-1)}>go back</button>
                </>
            )}
        </>
    );
};