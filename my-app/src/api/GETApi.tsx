import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Delete } from '@material-ui/icons';


interface questionsProps {
    questionID: Number;
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

function Api(props: questionsProps) {
    const url = 'https://livequeryapi.azurewebsites.net/api/Questions';
    const [questions, setQuestions] = useState<questionsProps[]>([{ questionID: 0, firstName: "", lastName: "", question: "", description: "" }]);
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