import React, { Component } from 'react';
import { TextField, Button } from "@material-ui/core";
import PostApi from '../api/PostApi';


class Form extends Component {

    render() {
        return (
            <div className="form">
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
                    id="titleInput"
                    label="Title"
                    defaultValue=""
                    required
                    variant="outlined"
                />
                <TextField
                    id="questionInput"
                    label="Question"
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