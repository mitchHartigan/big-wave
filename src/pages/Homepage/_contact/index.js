import React, { Component } from "react";
import styled from "styled-components";
import ContactForm from "./_ContactForm";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";
import { Info } from "./_Info";
import { CenterBlock } from "components/CenterBlock";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title size="lg">Contact</Title>
        <Subtext alignment="center" styles="margin: 40px 0px 30px 0px;">
          We’d love to hear from you. Reach out via phone or email:
        </Subtext>
        <InfoContainer>
          <Info
            imgURL="contact_phone_icon.png"
            imgAlt="Phone icon."
            text="667 - 244 - 9283"
            href="tel:6672449283"
          />
          <Info
            imgURL="contact_email_icon.png"
            imgAlt="Email icon."
            text="info@bigwavewater.com"
            href="mailto: mitch.hartigan@gmail.com"
          />
        </InfoContainer>

        <ContactForm />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 130px 0px 20px 0px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
