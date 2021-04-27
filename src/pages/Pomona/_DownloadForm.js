import React from "react";
import { Form } from "components/form/Form";
import { Success } from "components/form/Success";
import { Input } from "components/form/Input";
import { TextArea } from "components/form/TextArea";
import { SubmitButton } from "components/form/SubmitButton";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";
import { CenterBlock } from "components/CenterBlock";
import styled from "styled-components";
import { POST_DOWNLOAD_FORM } from "components/API";

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
      submitted: false,
      success: false,
    };
  }

  handleUpdate = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, phone, questions } = this.state;
    const { study } = this.props;

    this.setState(
      {
        invalidName: name === "",
        invalidEmail: email === "",
        invalidPhone: phone === "",
      },
      async () => {
        const { invalidName, invalidEmail, invalidPhone } = this.state;

        if ((!invalidName, !invalidEmail, !invalidPhone)) {
          // post form.
          const payload = {
            name: name,
            email: email,
            phone: phone,
            message: questions,
            study: study,
          };

          this.setState({ submitted: true });
          const submission = await POST_DOWNLOAD_FORM(payload);
          console.log("submission:", submission);

          if (submission === "success") {
            this.setState({ success: true });
          }
        }
      }
    );
  };

  render() {
    const {
      invalidName,
      invalidEmail,
      invalidPhone,
      submitted,
      success,
    } = this.state;

    return (
      <Container>
        {!success && (
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
              <SubmitButton onClick={this.validateForm} submitted={submitted}>
                Send
              </SubmitButton>
            </CenterBlock>
          </Form>
        )}

        {success && (
          <Form>
            <Success />
          </Form>
        )}
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
