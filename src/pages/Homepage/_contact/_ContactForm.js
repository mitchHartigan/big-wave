import React, { Component } from "react";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { Subtext } from "components/Subtext";
import { TextArea } from "components/form/TextArea";
import { Button } from "components/Button";
import { CenterBlock } from "components/CenterBlock";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleUpdate = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form>
        <Subtext alignment="center" styles="margin-bottom: 0px;">
          Or, send us a message directly:
        </Subtext>
        <Input label="Full Name *" />
        <Input label="Email *" />
        <TextArea label="Message *" />
        <CenterBlock>
          <Button>Send</Button>
        </CenterBlock>
      </Form>
    );
  }
}
