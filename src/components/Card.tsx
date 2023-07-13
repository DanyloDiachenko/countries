import React from "react";
import styled from "styled-components";

import { CardProps } from "src/interfaces/card.props";

const Wrapper = styled.article`
    background-color: var(--colors-ui-base);
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s;
    height: 100%;

    &:hover {
        box-shadow: var(--shadow);
    }
`;

const CardImage = styled.img.attrs({
    loading: "lazy",
})`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
`;

const CardListItem = styled.li`
    font-sie: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
        color: var(--colors-text);
    }
`;

const Description = styled.span`
    color: var(--colors-text);
`;

export const Card = ({ img, name, info = [] }: CardProps): JSX.Element => {
    return (
        <Wrapper>
            <CardImage src={img} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}: </b>
                            <Description>{el.description}</Description>
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};
