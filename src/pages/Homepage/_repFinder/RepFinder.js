import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import InteractiveMap from "./InteractiveMap";
import RepCard from "./RepCard";
import { Representatives } from "./Representatives";
import { CenterBlock } from "components/CenterBlock";

export default class RepFinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAllReps: false,
    };
  }

  render() {
    const { displayAllReps } = this.state;
    const {
      coastalProcess,
      dAndHWaterSystems,
      dAndHWaterSystemsNorcal,
      macaulay,
      miscoInter,
      tmg,
      sos,
      tc,
      petersonAndMatz,
      hpThompson,
      mc2,
      waterStorageSolutions,
    } = Representatives;

    return (
      <Container>
        <Title
          size="lg"
          styles="@media(max-width:1150px) {margin-bottom: 30px}"
        >
          Our Representatives
        </Title>
        <DescriptionText alignment="center">
          Hover over the map to view our representatives by their service areas.
        </DescriptionText>
        <InteractiveMap />
        <CenterBlock>
          <Button
            onClick={() => this.setState({ displayAllReps: true })}
            isVisible={!displayAllReps}
          >
            View all our representatives
          </Button>
        </CenterBlock>
        <RepCardContainer isVisible={displayAllReps}>
          <RepCardRow>
            <RepCard
              repData={dAndHWaterSystems}
              marginOverride="40px 0px 30px 0px"
            />
            <RepCard
              repData={dAndHWaterSystemsNorcal}
              marginOverride="40px 0px 30px 0px"
            />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={macaulay} />
            <RepCard repData={petersonAndMatz} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={miscoInter} />
            <RepCard repData={coastalProcess} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={tmg} />
            <RepCard repData={tc} marginOverride="-10px 0px -10px 0px" />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={hpThompson} />
            <RepCard repData={mc2} marginOverride="40px 0px 0px 0px" />
          </RepCardRow>
          <RepCardRow>
            <RepCard
              repData={waterStorageSolutions}
              smallDescription
              marginOverride="20px 0px 0px 10px"
            />
            <RepCard repData={sos} />
          </RepCardRow>
        </RepCardContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const RepCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: ${(props) => (props.isVisible ? "flex" : "none")};

  @media (max-width: 1150px) {
    display: flex;
  }
`;

const RepCardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin: 35px 0px 35px 0px;

  @media (max-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
    margin: 0px;
  }
`;

const Button = styled.button`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  padding: 10px 90px 10px 90px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const DescriptionText = styled.p`
  margin: 40px 0px 0px 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;

  @media (max-width: 1150px) {
    display: none;
  }
`;
