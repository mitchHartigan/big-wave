import React from "react";
import styled from "styled-components";
import { CenterBlock } from "components/CenterBlock";

export default function RepCard(props) {
  return (
    <Container>
      <CenterBlock>
        <RepLogo
          src="repLogos/coastalProcess.png"
          alt="repLogos"
          imgHeight={props.imgHeight}
          imgWidth={props.imgWidth}
        />
      </CenterBlock>
      <DetailsContainer>
        <Details>
          <DetailIcon src="rep_location_icon.png" />
          <LocationText>{`Lousiana & Mississippi`}</LocationText>
        </Details>
        <Details>
          <DetailIcon src="rep_email_icon.png" />
          <Email>info@coastalprocess.net</Email>
        </Details>
        <Details>
          <DetailIcon src="rep_phone_icon.png" />
          <PhoneNumber>225 - 567 - 3120</PhoneNumber>
        </Details>
      </DetailsContainer>
    </Container>
  );
}

const RepLogo = styled.img`
  height: ${(props) => props.imgHeight};
  width: ${(props) => props.imgWidth};
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 470px;
  color: white;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.35);
  justify-content: center;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.div`
  margin: 15px 0px 15px 0px;
  display: grid;
  grid-template-columns: 15% 10% 7% 43% 25%;
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
`;

const Email = styled.p`
  grid-column: 4 / 5;
  margin: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: left;
  color: ${(props) => props.theme.colors.mainBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;
`;

const PhoneNumber = styled.p`
  grid-column: 4 / 5;
  margin: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: left;
  color: ${(props) => props.theme.colors.mainBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;
`;
