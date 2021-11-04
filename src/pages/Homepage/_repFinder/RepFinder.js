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
      macaulay,
      haynes,
      miscoInter,
      miscoNorcal,
      tmg,
      tc,
      pyrz,
      petersonAndMatz,
      hpThompson,
      mc2,
    } = Representatives;

    return (
      <Container>
        <Title>Representative Finder</Title>
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
            <RepCard repData={coastalProcess} />
            <RepCard
              repData={dAndHWaterSystems}
              marginOverride="40px 0px 30px 0px"
            />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={macaulay} />
            <RepCard repData={haynes} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={miscoInter} />
            <RepCard repData={miscoNorcal} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={tmg} />
            <RepCard repData={tc} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={pyrz} />
            <RepCard repData={petersonAndMatz} />
          </RepCardRow>
          <RepCardRow>
            <RepCard repData={hpThompson} />
            <RepCard repData={mc2} />
          </RepCardRow>
        </RepCardContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;

const RepCardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
  margin: 35px 0px 35px 0px;
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
`;
