import React from "react";
import styled from "styled-components";
import { CenterBlock } from "components/CenterBlock";
import { CloseButton } from "./CloseButton";

/* 
  Small ~400x400 white card with a rep logo and contact information. Displayed
  either over the map when a service area is clicked, or in a grid beneath the map.
  Takes rep data from Representatives.js as props.
*/

export default function RepCard(props) {
  const {
    logoSrc,
    logoAlt,
    logoHeight,
    logoWidth,
    location,
    email,
    phone,
    phonePrefill,
  } = props.repData;
  const { marginOverride, closable, handleCloseButton } = props;

  return (
    <CenterBlock>
      <Container>
        <CloseButton onClick={handleCloseButton} display={closable} />
        <DetailsContainer>
          <CenterBlock>
            <RepLogo
              src={`/repLogos/${logoSrc}`}
              alt={logoAlt}
              imgHeight={logoHeight}
              imgWidth={logoWidth}
              marginOverride={marginOverride}
            />
          </CenterBlock>
          <Details>
            <DetailIcon src="rep_location_icon.png" />
            <LocationText>{location}</LocationText>
          </Details>
          <Details>
            <DetailIcon src="rep_email_icon.png" />
            <Email href={`mailto:${email}`} target="_blank">
              {email}
            </Email>
          </Details>
          <Details>
            <DetailIcon src="rep_phone_icon.png" />
            <PhoneNumber href={phonePrefill}>{phone}</PhoneNumber>
          </Details>
        </DetailsContainer>
      </Container>
    </CenterBlock>
  );
}

const RepLogo = styled.img`
  height: ${(props) => props.imgHeight};
  width: ${(props) => props.imgWidth};
  margin: ${(props) => props.marginOverride};
  margin-bottom: 30px;

  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 430px;
  width: 480px;
  background: white;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.35);
  justify-content: center;

  @media (max-width: 1150px) {
    margin: 30px 0px 30px 0px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.div`
  margin: 15px 0px 15px 0px;
  display: grid;
  grid-template-columns: 15% 10% 5% 55% 15%;
  grid-template-rows: 1fr;
`;

const DetailIcon = styled.img`
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
`;

const LocationText = styled.p`
  grid-column: 4 / 5;
  margin: 0px;
  margin-bottom: -2px;
  align-self: end;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const Email = styled.a`
  grid-column: 4 / 5;
  text-decoration: none;
  margin: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: left;
  color: ${(props) => props.theme.colors.mainBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const PhoneNumber = styled.a`
  grid-column: 4 / 5;
  text-decoration: none;
  margin: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: left;
  color: ${(props) => props.theme.colors.mainBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
