import React, { ChangeEvent, Component, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../api/Api';

interface questionProps {
    firstName: string;
    lastName: string;
    question: string;
    description: string;
}

const Forms: React.FC = () => {
    const history = useHistory();
    const [detail, setDetail] = useState<questionProps>({ firstName: "", lastName: "", question: "", description: "" })

    function inputs(e: ChangeEvent<HTMLInputElement>) {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    // POST
    async function post(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await api.post('/', detail)
        console.log(response);
    }

    function back() {
        history.goBack();
    }

    return (
        <div className="container">
            <br />
            <div className="formHeader">
                <h1> New Question </h1>
                <div className="buttons">
                    <Button onClick={back} variant="info" size="sm">
                        Back</Button>
                </div>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={post}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="firstName" value={detail.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="lastName" value={detail.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="text" placeholder="" name="question" value={detail.question} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} name="description" value={detail.description} onChange={(e: ChangeEvent<HTMLInputElement>) => inputs(e)} />
                    </Form.Group>
                    <Button type="submit" variant="primary" size="sm">
                        Add New</Button>
                </Form>
            </div>
        </div >
    )
}

export default Forms;