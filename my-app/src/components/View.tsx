import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/Api';
import { useHistory } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

interface ITask {
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

const View: React.FC = () => {
    const [question, setQuestion] = useState<ITask>({ firstName: "", lastName: "", question: "", description: "" })
    const { questionID } = useParams();
    const history = useHistory();

    function inputs(e: ChangeEvent<HTMLInputElement>) {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (questionID !== undefined) {
            view(questionID);
            console.log(questionID);
        }

    }, [questionID])

    async function view(questionID: string) {
        const response = await api.get(`/${questionID}`)
        console.log(response);
        setQuestion({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            question: response.data.question,
            description: response.data.description
        })
    }

    function back() {
        history.goBack();
    }

    return (
        <div>
            <div className="buttons">
                <Button variant="info" onClick={back}> Back </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Question</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{question.firstName}</td>
                        <td>{question.lastName}</td>
                        <td>{question.question}</td>
                        <td>{question.description}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default View;