import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography } from "@material-ui/core";

export default class Contact extends Component {
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });




  };

  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };
  // Functions
  render() {
    return (
      <>
        <Container
          maxWidth="lg"
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: "10px 10px",
          }}
        >

          <Typography variant="h3" > {this.props.heading} </Typography> <br />
          <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <TextField
              fullWidth
              id="standard-multiline-flexible"
              label="Name"
              placeholder="Enter Name"
              variant="outlined"
              multiline
              rowsMax={4}
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              required
              type="text"
            />
            <br />
            <br />

            <TextField
              id="outlined-basic"
              fullWidth
              placeholder="Enter your Email"
              label="Email"
              variant="outlined"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
              type="email"
            />
            <br />
            <br />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile"
              placeholder="Enter Mobile Number"
              variant="outlined"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e)}
              error={this.state.emailError}
              required
              type="email"
            />
            <br />
            <br />

            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter Subject"
              label="Subject"
              variant="outlined"
              value={this.state.subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
              required
            />
            <br />
            <br />

            <div className="button--container">
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#1976D2" }}
              >
                {this.state.buttonText}
              </Button>
            </div>
          </form>
        </Container>
      </>
    );
  }
}
