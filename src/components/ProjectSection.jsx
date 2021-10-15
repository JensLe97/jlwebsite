import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const ProjectCard = styled.a`
  background: #070218;
  box-shadow: 0 6px 20px rgb(7, 1, 34);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: rgb(7, 1, 34);
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

const ProjectCardClass = styled.h3`
  text-align: center;
  margin-bottom: 5px;
  font-size: 24px;
`;

const ProjectCardTitle = styled.h4`
  text-align: center;
  font-size: 40px;
`;

const ProjectCardSubtitle = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`;

const ProjectCardDetails = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c1c8d3;
`;

const ProjectCardDetail = styled.li`
  text-align: center;
  margin-bottom: 10px;
`;

function ProjectSection() {
    return (
        <Section>
        <ProjectWrapper>
          <ProjectContainer>
            <ProjectCard  
                    href="https://ieeexplore.ieee.org/abstract/document/9551968" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="IEEE Xplore">
              <ProjectCardInfo>
                <ProjectCardClass>Meine Forschung</ProjectCardClass>
                <ProjectCardTitle>IEEE Paper</ProjectCardTitle>
                <ProjectCardSubtitle>Prioritizing Relevant Information</ProjectCardSubtitle>
                <ProjectCardDetails>
                  <ProjectCardDetail>Decentralized V2X Resource Allocation for Cooperative Driving</ProjectCardDetail>
                  <ProjectCardDetail>D. Bischoff et al.</ProjectCardDetail>
                  <ProjectCardDetail>Co-author: Jens Lemke</ProjectCardDetail>
                  <ProjectCardDetail>2021</ProjectCardDetail>
                </ProjectCardDetails>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard  
                    href="https://github.com/JensLe97/CheckNotion" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CheckNotion">
              <ProjectCardInfo>
                <ProjectCardClass>Meine App</ProjectCardClass>
                <ProjectCardTitle>CheckNotion</ProjectCardTitle>
                <ProjectCardSubtitle>Deine Ideen im Blick</ProjectCardSubtitle>
                <ProjectCardDetails>
                  <ProjectCardDetail>Notizen</ProjectCardDetail>
                  <ProjectCardDetail>Todos</ProjectCardDetail>
                  <ProjectCardDetail>Quiz</ProjectCardDetail>
                  <ProjectCardDetail>Event-Timer</ProjectCardDetail>
                  <ProjectCardDetail>Taschenrechner</ProjectCardDetail>
                  <ProjectCardDetail> </ProjectCardDetail>
                  <ProjectCardDetail>2021</ProjectCardDetail>
                </ProjectCardDetails>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard  
                    href="https://github.com/JensLe97" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
              <ProjectCardInfo>
                <ProjectCardClass>Mein GitHub</ProjectCardClass>
                <ProjectCardTitle>Alle Projekte</ProjectCardTitle>
                <ProjectCardSubtitle>Private Programmiererfahrungen</ProjectCardSubtitle>
                <ProjectCardDetails>
                  <ProjectCardDetail>Tic-Tac-Toe</ProjectCardDetail>
                  <ProjectCardDetail>Snake</ProjectCardDetail>
                  <ProjectCardDetail>Suchalgorithmen</ProjectCardDetail>
                  <ProjectCardDetail>Diese Website</ProjectCardDetail>
                  <ProjectCardDetail>CheckNotion</ProjectCardDetail>
                </ProjectCardDetails>
              </ProjectCardInfo>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </Section>
    )
}

export default ProjectSection
