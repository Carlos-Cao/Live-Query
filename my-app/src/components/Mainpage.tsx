import React, { Component, useState, useEffect } from 'react';
import Forms from '../components/Form';
import { Table, Card, Button } from 'react-bootstrap';
import api from '../api/Api';
import { useHistory } from 'react-router-dom';


interface questionsProps {
    questionID: number;
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

const Home: React.FunctionComponent = () => {
    const history = useHistory();
    const [questions, setQuestions] = useState<questionsProps[]>([{ questionID: 0, firstName: "Loading", lastName: "", question: "Please wait", description: "" }]);

    useEffect(() => {
        fetchQuestions()
    }, [])

    // GET ALL
    async function fetchQuestions() {
        const response = await api.get('/')
        console.log(response);
        setQuestions(response.data);
    }

    function addQuestion() {
        history.push('./form');
    }

    return (
        <div className="container">
            <div>
            </div>
            <Table striped bordered hover className="tables">
                <thead>
                    <tr>
                        <th><Button onClick={addQuestion} >Add Question</Button></th>
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