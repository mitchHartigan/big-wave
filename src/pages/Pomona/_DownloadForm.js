import React from "react";
import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { TextArea } from "components/form/TextArea";
import { Button } from "components/Button";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";
import { CenterBlock } from "components/CenterBlock";
import styled from "styled-components";

export class DownloadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      questions: "",
      invalidName: false,
      invalidEmail: false,
      invalidPhone: false,
    };
  }

  handleUpdate = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, phone } = this.state;

    this.setState(
      {
        invalidName: name === "",
        invalidEmail: email === "",
        invalidPhone: phone === "",
      },
      () => {
        const { invalidName, invalidEmail, invalidPhone } = this.state;

        if ((!invalidName, !invalidEmail, !invalidPhone)) {
          // post form.
          console.log("form is valid and ready for submission");
        }
      }
    );
  };

  render() {
    const { invalidName, invalidEmail, invalidPhone } = this.state;

    return (
      <Container>
        <Form>
          <Title size="lg" align="center" styles={TitleStylesOverride}>
            Download Study
          </Title>
          <Subtext alignment="center" styles="margin-bottom: 3vh">
            Request to view and download this study by filling out this form.
          </Subtext>
          <Input
            label="Full Name *"
            name="name"
            onChange={this.handleUpdate}
            invalid={invalidName}
          />
          <Input
            label="Email *"
            name="email"
            onChange={this.handleUpdate}
            invalid={invalidEmail}
          />
          <Input
            label="Phone Number *"
            name="phone"
            onChange={this.handleUpdate}
            invalid={invalidPhone}
          />
          <TextArea
            label="Questions or Comments"
            name="questions"
            onChange={this.handleUpdate}
          />
          <CenterBlock>
            <Button onClick={this.validateForm}>Send</Button>
          </CenterBlock>
        </Form>
      </Container>
    );
  }
}

const TitleStylesOverride = {
  marginTop: "4vh",
  marginBottom: "2vh",
};

const Container = styled.div`
  margin-top: 15vh;

  @media (max-width: 1350px) {
    margin-top: 8vh;
  }
`;