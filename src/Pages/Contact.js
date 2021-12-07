import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography, Divider } from "@material-ui/core";

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

    handleChangeEmail(e) {
        if (
            !e.target.value.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            this.setState({
                email: e.target.value,
            });
            this.setState({ emailError: true });

            if (this.state.email === "") {
                // check if the input is empty
                this.setState({ emailError: false });
            }
        } else {
            this.setState({ email: e.target.value, emailError: false });
        }
    }

    formSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            buttonText: "...sending",
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject,
        };

        try {
            await axios.post("BACKEND_URL", data);
            this.setState({ sent: true }, this.resetForm());
        } catch (error) {
            console.log(error);
        }
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
                <Container maxWidth="lg" style={{ textAlign: "center", alignItems: "center", padding: "10px 10px" }}>
                    <div style={{ padding: "50px" }}>
                        <Typography variant="h3" gutterBottom>
                            Welcome To RV Technolabs
                        </Typography>

                        <Typography variant="p" gutterBottom>
                            Here You Will Find Best IT Services
                        </Typography>
                    </div>
                    <Divider style={{ marginBottom: "20px", }} />
                    <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                        <TextField fullWidth
                            id="standard-multiline-flexible"
                            label="Message"
                            placeholder="Enter Message"
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
                            id="outlined-basic" fullWidth
                            placeholder="Enter your name"
                            label="Name"
                            variant="outlined"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            required
                            type="text"
                        />
                        <br />
                        <br />


                        <TextField fullWidth
                            id="outlined-basic"
                            label="Email"
                            placeholder="Enter email address"
                            variant="outlined"
                            value={this.state.email}
                            onChange={(e) => this.handleChangeEmail(e)}
                            error={this.state.emailError}
                            required
                            type="email"
                        />
                        <br />
                        <br />

                        <TextField fullWidth
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
                            <Button variant="contained" color="primary" style={{ backgroundColor: "#1976D2" }}>
                                {this.state.buttonText}
                            </Button>
                        </div>
                    </form>
                </Container>
            </>
        );
    }
}