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
    const [questions, setQuestions] = useState<questionsProps[]>([{ questionID: 0, firstName: "Loading", lastName: "", question: "Please wait", description: "" }]);
    const history = useHistory();

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

    function viewQuestion(questionID: number) {
        history.push(`./form/${questionID}`)
    }

    return (
        <div>
            <br />
            <div className="buttons">
                <Button size='lg' variant="info" onClick={addQuestion} >Add Question</Button>
            </div>
            <br />
            {questions.map(qa => (
                <div key={qa.questionID}>
                    <Card className="cards" style={{ width: '18rem' }}>
                        <Card.Body >
                            <Card.Text>Name: {qa.firstName} {qa.lastName}                                        </Card.Text>
                            <Card.Title>Question: {qa.question}</Card.Title>
                            <Card.Text>Description: {qa.description}</Card.Text>
                            <Button onClick={() => viewQuestion(qa.questionID)} variant="success">View</Button> {" "}
                            <Button variant="primary">Update</Button> {" "}
                            <Button variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            ))
            }
        </div>
    )
}
export default Home;