import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import { IOption } from "src/interfaces/option.interface";
import { ControlsProps } from "src/interfaces/controls.props";

const options: IOption[] = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: text-start;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Controls = ({ onSearch }: ControlsProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<IOption | null | string>("");

    useEffect(() => {
        const regionValue =
            typeof region === "string" ? region : region?.value || "";
        onSearch(search, regionValue);
    }, [search, region]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                value={region}
                onChange={(regClicked) =>
                    setRegion(regClicked as IOption | null)
                }
                options={options}
                placeholder="Filter by region"
                isClearable
                isSearchable={false}
            />
        </Wrapper>
    );
};
