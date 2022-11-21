import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: text-start;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    };
`;

export const Controls = () => {

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect value={region} onChange={setRegion} options={options} placeholder="Filter by region" isClearable isSearchable={false} />
        </Wrapper>
    );
};