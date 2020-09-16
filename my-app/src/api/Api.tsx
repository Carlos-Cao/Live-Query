import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Detail from './DeleteApi';
import { Delete } from '@material-ui/icons';

interface Ask {
    questionID: 0;
    firstName: string;
    lastName: string;
    question: string;
    description: string;
    data: [];
}
let input: any;

function Deletes() {
    const url = `https://livequeryapi.azurewebsites.net/api/Questions/${input}`;
    fetch(url, {
        method: "DELETE",
    });
    window.location.reload();
}

function Api() {
    const url = 'https://livequeryapi.azurewebsites.net/api/Questions';
    const [questions, setQuestions] = useState<Ask[]>([{ questionID: 0, firstName: "", lastName: "", question: "", description: "", data: [] }]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setQuestions(response);
                console.log(response);
            });
    }, [])

    return (
        <div>
            {
                questions.map((qa: any, index: any) => {
                    return (
                        <div key={index}> <Card className="cards">
                            {input = qa.questionID}
                            <Card.Body className="cardbody"> <Card.Title >Name: {qa.firstName} {qa.lastName}</Card.Title>
                                <Card.Title>Query: <u>{qa.question}</u></Card.Title>
                                <p>Query Description: {qa.description} </p>

                            </Card.Body>
                            <div className="buttons">
                                <Button
                                    id="updateCard"
                                    variant="contained"
                                    color="primary"
                                    className="delete"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Update
                                </Button>
                                <Button
                                    id="deleteCard"
                                    variant="contained"
                                    color="secondary"
                                    className="delete"
                                    startIcon={<DeleteIcon />}
                                    onClick={Deletes}

                                >
                                    Delete
                                </Button>
                            </div>
                        </Card>
                            <br />
                        </div>
                    )
                })
            }
        </div >

    )
}



export default Api;