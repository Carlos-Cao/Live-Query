import React, { Component } from 'react';
import { TextField, Button } from "@material-ui/core";
import PostApi from '../api/PostApi';


class Form extends Component {

    render() {
        return (
            <div className="form">
                <p>Enter your First and Last name, then ask your question and give it a description</p>
                <TextField
                    id="firstInput"
                    label="First Name"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <TextField
                    id="lastInput"
                    label="Last Name"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <br />
                <TextField
                    id="questionInput"
                    label="Query"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <TextField
                    id="descriptionInput"
                    label="Description"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <br />
                <Button onClick={PostApi} variant="contained" color="secondary"> Submit </Button>
            </div>
        )
    }
}

export default Form;