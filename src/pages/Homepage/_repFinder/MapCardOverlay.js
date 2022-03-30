import React from "react";
import styled from "styled-components";
import RepCard from "./RepCard";
import { Representatives } from "./Representatives";

export default function MapCardOverlay(props) {
  if (props.repData === "waterStorageSolutions") {
    return (
      <Container display={props.display}>
        <RepCard
          repData={Representatives[props.repData]}
          closable
          handleCloseButton={props.handleCloseButton}
          smallDescription
          marginOverride="20px 0px 0px 10px"
        />
      </Container>
    );
  }

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
  left: 0;
  right: 0;
  top: 130px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;
