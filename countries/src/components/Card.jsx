import styled from 'styled-components';

const Wrapper = styled.article`

`;

const CardImage = styled.img`

`;

const CardBody = styled.div`

`;

const CardTitle = styled.h3`

`;

const CardList = styled.ul`

`;

const CardListItem = styled.li`

`;

const Card = ({ img, name, info = [], onClick }) => {
    return (
        <Wrapper onclick={onClick}>
            <CardImage />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.CardTitle}>
                            <b>{el.title}: </b>{el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};