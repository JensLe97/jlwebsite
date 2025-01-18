import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 80px 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
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
  &:nth-child(odd) {
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
            href="https://ieeexplore.ieee.org/document/10801916"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IEEE Xplore"
          >
            <ProjectCardInfo>
              <ProjectCardClass>Publikationen</ProjectCardClass>
              <ProjectCardTitle>IROS Paper</ProjectCardTitle>
              <ProjectCardSubtitle>
                Oral Presentation - Abu Dhabi
              </ProjectCardSubtitle>
              <ProjectCardDetails>
                <ProjectCardDetail>
                  LiOn-XA: Unsupervised Domain Adaptation via LiDAR-Only
                  Cross-Modal Adversarial Training
                </ProjectCardDetail>
                <ProjectCardDetail>T. Kreutz et al.</ProjectCardDetail>
                <ProjectCardDetail>Second author: Jens Lemke</ProjectCardDetail>
                <ProjectCardDetail>2024</ProjectCardDetail>
              </ProjectCardDetails>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard
            href="https://github.com/JensLe97/tech-knowl-edge-connect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TechKnowlEdgeConnect"
          >
            <ProjectCardInfo>
              <ProjectCardClass>TechKnowlEdgeConnect</ProjectCardClass>
              <ProjectCardTitle>Flutter App</ProjectCardTitle>
              <ProjectCardSubtitle>
                Lern-App für die Schule und Uni. Aufbau und Austausch von
                Wissen.
              </ProjectCardSubtitle>
              <ProjectCardDetails>
                <ProjectCardDetail>Lern-Dashboard</ProjectCardDetail>
                <ProjectCardDetail>Suche nach Inhalten</ProjectCardDetail>
                <ProjectCardDetail>Ideen von anderen</ProjectCardDetail>
                <ProjectCardDetail>Chats mit Usern</ProjectCardDetail>
                <ProjectCardDetail>AI Tech Chat</ProjectCardDetail>
                <ProjectCardDetail> </ProjectCardDetail>
                <ProjectCardDetail>2025</ProjectCardDetail>
              </ProjectCardDetails>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard
            href="https://github.com/JensLe97"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <ProjectCardInfo>
              <ProjectCardClass>Mein GitHub</ProjectCardClass>
              <ProjectCardTitle>Alle Projekte</ProjectCardTitle>
              <ProjectCardSubtitle>
                Private Programmiererfahrungen
              </ProjectCardSubtitle>
              <ProjectCardDetails>
                <ProjectCardDetail>TechKnowlEdgeConnect</ProjectCardDetail>
                <ProjectCardDetail>CheckNotion</ProjectCardDetail>
                <ProjectCardDetail>Sudoku</ProjectCardDetail>
                <ProjectCardDetail>Tic-Tac-Toe</ProjectCardDetail>
                <ProjectCardDetail>Snake</ProjectCardDetail>
                <ProjectCardDetail>Suchalgorithmen</ProjectCardDetail>
                <ProjectCardDetail>Diese Website</ProjectCardDetail>
              </ProjectCardDetails>
            </ProjectCardInfo>
          </ProjectCard>
        </ProjectContainer>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectContainer>
          <ProjectCard
            href="https://ieeexplore.ieee.org/abstract/document/9551968"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IEEE Xplore"
          >
            <ProjectCardInfo>
              <ProjectCardClass>Meine Forschung</ProjectCardClass>
              <ProjectCardTitle>IEEE Paper</ProjectCardTitle>
              <ProjectCardSubtitle>
                Prioritizing Relevant Information
              </ProjectCardSubtitle>
              <ProjectCardDetails>
                <ProjectCardDetail>
                  Decentralized V2X Resource Allocation for Cooperative Driving
                </ProjectCardDetail>
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
            aria-label="CheckNotion"
          >
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
            href="https://jenslemke.com/game"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Flappy Bird"
          >
            <ProjectCardInfo>
              <ProjectCardClass>Meine Webapp</ProjectCardClass>
              <ProjectCardTitle>Flappy Bird</ProjectCardTitle>
              <ProjectCardSubtitle>Mini-Game in JavaScript</ProjectCardSubtitle>
              <ProjectCardDetails>
                <ProjectCardDetail>TypeScript</ProjectCardDetail>
                <ProjectCardDetail>Phaser</ProjectCardDetail>
                <ProjectCardDetail>Mobile und Desktop</ProjectCardDetail>
                <ProjectCardDetail>Level</ProjectCardDetail>
                <ProjectCardDetail>Physik</ProjectCardDetail>
                <ProjectCardDetail>Design</ProjectCardDetail>
              </ProjectCardDetails>
            </ProjectCardInfo>
          </ProjectCard>
        </ProjectContainer>
      </ProjectWrapper>
    </Section>
  );
}

export default ProjectSection;
