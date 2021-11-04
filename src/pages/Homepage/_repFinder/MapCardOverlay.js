import React from "react";
import styled from "styled-components";
import RepCard from "./RepCard";
import { Representatives } from "./Representatives";

export default function MapCardOverlay(props) {
  const repData = props.repData;
  console.log("repData", repData);

  return (
    <Container display={props.display}>
      <RepCard
        repData={Representatives[props.repData]}
        closable
        handleCloseButton={props.handleCloseButton}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.display ? "block" : "none")};
  left: 308px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
`;
