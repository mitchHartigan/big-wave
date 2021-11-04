import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import InteractiveMap from "./InteractiveMap";
import RepCard from "./RepCard";
import { Representatives } from "./Representatives";
import { CenterBlock } from "components/CenterBlock";

export default function RepFinder() {
  const { coastalProcess, dAndHWaterSystems } = Representatives;
  return (
    <Container>
      <Title>Representative Finder</Title>
      <InteractiveMap />
      <CenterBlock>
        <RepCardRow>
          <RepCard repData={coastalProcess} />
          <RepCard
            repData={dAndHWaterSystems}
            marginOverride="30px 0px 30px 0px"
          />
        </RepCardRow>
      </CenterBlock>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepCardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-around;
`;
