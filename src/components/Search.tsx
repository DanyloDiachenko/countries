import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { IoSearch } from "react-icons/io5";
import { SearchProps } from "src/interfaces/search.props";

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    width: 100%;
    margin-bottom: 1rem;
    transition: 0.3s;

    &:hover,
    &:focus,
    &:active {
        box-shadow: var(--shadow);
    }

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country...",
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
    cursor: pointer;
`;

export const Search = ({ search, setSearch }: SearchProps): JSX.Element => {
    return (
        <InputContainer>
            <IoSearch />
            <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                }
                value={search}
            />
        </InputContainer>
    );
};
