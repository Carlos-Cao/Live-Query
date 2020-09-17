import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
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

    // DELETE
    async function deleteQuestion(questionID: number) {
        const response = await api.delete(`/${questionID}`);
        console.log(response);
        fetchQuestions();
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
                            <Card.Subtitle className="mb-2 text-muted"><b>ID:</b> {qa.questionID}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><b>Name:</b> {qa.firstName} {qa.lastName} </Card.Subtitle>
                            <Card.Title><b>Question:</b> {qa.question}</Card.Title>
                            <Card.Text><b>Description:</b> {qa.description}</Card.Text>
                            <Button onClick={() => viewQuestion(qa.questionID)} variant="success">View</Button> {" "}
                            <Button variant="warning">Update</Button> {" "}
                            <Button onClick={() => deleteQuestion(qa.questionID)} variant="danger">Delete</Button>
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