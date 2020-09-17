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
        setQuestions(response.data);
    }

    // DELETE
    async function deleteQuestion(questionID: number) {
        try {
            const response = await api.delete(`/${questionID}`);
        } catch (e) {
            alert("An error has occured with delete");
        }
        fetchQuestions();
    }

    function addQuestion() {
        history.push('./form');
    }

    function viewQuestion(questionID: number) {
        history.push(`./view/${questionID}`)
    }

    function updateQuestion(questionID: number) {
        history.push(`./form/${questionID}`)
    }

    function scroll() {
        window.scrollTo(0, 0);
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
                    <Card className="cards" style={{ width: '50%' }}>
                        <Card.Body >
                            <Card.Subtitle className="mb-2 text-muted"><b><u>ID:</u></b> {qa.questionID}</Card.Subtitle>
                            <hr />
                            <Card.Subtitle className="mb-2 text-muted"><b><u>Name:</u></b> {qa.firstName} {qa.lastName} </Card.Subtitle>
                            <hr />
                            <Card.Title><b><u>Question:</u></b> {qa.question}</Card.Title>
                            <hr />
                            <Card.Text><b><u>Description:</u></b> {qa.description}</Card.Text>
                            <div className="buttons">
                                <Button onClick={() => viewQuestion(qa.questionID)} variant="success">View</Button> {" "}
                                <Button onClick={() => updateQuestion(qa.questionID)} variant="warning">Update</Button> {" "}
                                <Button onClick={() => deleteQuestion(qa.questionID)} variant="danger">Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            ))
            }
            <div className="buttons">

                <p onClick={scroll}>Back to top &#129041;</p>
                <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="false"></div>
            </div>
        </div >
    )
}
export default Home;