import { useParams } from 'react-router-dom'

export const Details = () => {

    const params = useParams()

    return (
        <>
            <h1>Details: {params.name}</h1>
        </>
    );
};