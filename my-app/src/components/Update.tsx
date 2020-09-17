import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../api/Api';

interface questionProps {
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

const Update: React.FunctionComponent = () => {
    const history = useHistory();
    const [detail, setDetail] = useState<questionProps>({ firstName: "", lastName: "", question: "", description: "" })
    const { questionID } = useParams();

    function inputs(e: ChangeEvent<HTMLInputElement>) {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (questionID !== undefined) {
            view(questionID);
        }

    }, [questionID])

    // PUT
    async function post(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await api.put(`/${questionID}`, detail)
            if (response) {
                alert("Question has been updated!")
            }
        } catch (e) {
            alert("An error has occured with updating");

        }
    }

    async function view(questionID: string) {
        try {
            const response = await api.get(`/${questionID}`)
            setDetail({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                question: response.data.question,
                description: response.data.description
            })
        } catch (e) {
            alert("An error has occured with fetching question");

        }
    }

    function back() {
        history.goBack();
    }

    return (
        <div className="container">
            <br />
            <div className="formHeader">
                <h1> Update Question </h1>
                <div className="buttons">
                    <Button onClick={back} variant="info" size="sm">
                        Back</Button>
                </div>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={post}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control type="text" placeholder="" name="firstName" value={detail.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control type="text" placeholder="" name="lastName" value={detail.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Question*</Form.Label>
                        <Form.Control type="text" placeholder="" name="question" value={detail.question} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control as="textarea" rows={5} name="description" value={detail.description} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Button type="submit" variant="primary" size="sm">
                        Update Question</Button>
                </Form>
            </div>
        </div >
    )
}

export default Update;