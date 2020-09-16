import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



interface Ask {
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

function Api() {
    const url = 'https://livequeryapi.azurewebsites.net/api/Questions';
    const [questions, setQuestions] = useState<Ask[]>([{ firstName: "", lastName: "", question: "", description: "" }]);
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
                        <div key={'mykey' + index + 10}> {console.log()} <Card className="cards">
                            <Card.Body className="cardbody"> <Card.Title >Name: {qa.firstName} {qa.lastName}</Card.Title>
                                <Card.Title>Query: <u>{qa.question}</u></Card.Title>
                                <p>Query Description: {qa.description} </p>

                            </Card.Body>
                            <div className="buttons">
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