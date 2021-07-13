import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem;

    @media screen and (max-width: 960px) {
        padding: 0 2rem;
    }

    @media screen and (max-width: 600px) {
        padding: 0 1rem;
    }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
    grid-gap: 16px;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`
const LeftColumn = styled.div`
    line-height: 1.4;
    padding: 0 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    
    @media screen and (max-width: 960px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }

    @media screen and (max-width: 600px) {
        padding: 0 1rem;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`
const RightColumn = styled.div`
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        padding: 0 1rem;
    }
`

const InfoSection = ({
    heading, 
    firstParagraph, 
    secondParagraph,
    thirdParagraph,
    image,
    reverse
}) => {
    return (
        <Section>
            <Container>
                <LeftColumn>
                    <h1>{heading}</h1>
                    <p>{firstParagraph}</p>
                    <p>{secondParagraph}</p>
                    <p>{thirdParagraph}</p>
                </LeftColumn>
                <RightColumn reverse={reverse}>
                    <img src={image} alt="info-profile-jens-lemke" />
                </RightColumn>
            </Container>
        </Section>
    )
}

export default InfoSection
