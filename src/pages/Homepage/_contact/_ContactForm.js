import React, { Component } from "react";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { Subtext } from "components/Subtext";
import { TextArea } from "components/form/TextArea";
import { Button } from "components/Button";
import { CenterBlock } from "components/CenterBlock";
import styled from "styled-components";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
    };
  }

  handleUpdate = (evt) => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, message } = this.state;

    this.setState(
      {
        invalidName: name === "",
        invalidEmail: email === "",
        invalidMessage: message === "",
      },
      () => {
        const { invalidName, invalidEmail, invalidMessage } = this.state;

        if ((!invalidName, !invalidEmail, !invalidMessage)) {
          // post form.
          console.log("form is valid and ready to be posted.");
        }
      }
    );
  };

  render() {
    const { invalidEmail, invalidMessage, invalidName } = this.state;

    return (
      <Form>
        <Subtext alignment="center" styles="margin-bottom: 0px;">
          Or, send us a message directly:
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
        <TextArea
          label="Message *"
          name="message"
          onChange={this.handleUpdate}
          invalid={invalidMessage}
        />
        <CenterBlock>
          <Button onClick={this.validateForm}>Send</Button>
        </CenterBlock>
      </Form>
    );
  }
}
