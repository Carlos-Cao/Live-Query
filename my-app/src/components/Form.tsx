import React, { Component } from 'react';
import { TextField, Button } from "@material-ui/core";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <TextField
                    id="outlined-basic"
                    label="First Name"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Last Name"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Title"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Question"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <br />
                <Button variant="contained" color="secondary"> Submit </Button>
            </div>
        )
    }
}

export default Form;