import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface Ask {
    firstName: string;
    lastName: string;
    title: string;
    question: string;
}

function Api() {
    const url = 'https://questionanswersapi.azurewebsites.net/api/Questions';
    const [questions, setQuestions] = useState<Ask[]>([{ firstName: "", lastName: "", title: "", question: "" }]);
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
                        <div> <Card className="cards">
                            <Card.Body className="cardbody"> <Card.Title>Name: {qa.firstName} {qa.lastName}</Card.Title>
                                <Card.Title>Title: <u>{qa.title}</u></Card.Title>
                                <Card.Text>Question: {qa.question} </Card.Text>
                            </Card.Body>
                            <Button
                                variant="contained"
                                color="primary"
                                className="delete"
                                startIcon={<CloudUploadIcon />}
                            >
                                Update
                                </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="delete"
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                                </Button>
                        </Card>
                            <br /> </div>
                    )
                })
            }
        </div >

    )
}

export default Api;