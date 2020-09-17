import React, { Component, useState, useEffect } from 'react';
import Form from './Form';
import { Table, Card, Button } from 'react-bootstrap';
import api from '../api/Api';


interface questionsProps {
    questionID: number;
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

const Home: React.FunctionComponent = () => {

    const [questions, setQuestions] = useState<questionsProps[]>([{ questionID: 0, firstName: "", lastName: "", question: "", description: "" }]);

    useEffect(() => {
        fetchQuestions()
    }, [])

    async function fetchQuestions() {
        const response = await api.get('/')
        console.log(response);
        setQuestions(response.data);
    }

    return (
        <div className="container">
            <div>
            </div>
            <Table striped bordered hover className="tables">
                <thead>
                    <tr>
                        <th><Button>Add Question</Button></th>
                    </tr>
                </thead>
                <tbody>

                    {questions.map(qa => (
                        <tr key={qa.questionID}>
                            <td>
                                <Card className="cards" style={{ width: '18rem' }}>
                                    <Card.Body className="cardbody">
                                        <Card.Text>{qa.firstName} {qa.lastName}                                        </Card.Text>
                                        <Card.Title>{qa.question}</Card.Title>
                                        <Card.Text>{qa.description}</Card.Text>
                                        <Button variant="success">View</Button> {" "}
                                        <Button variant="primary">Update</Button> {" "}
                                        <Button variant="danger">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Home;