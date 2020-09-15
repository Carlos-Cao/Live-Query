import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

interface Ask {
    firstName: string;
    lastName: string;
    title: string;
    question: string;
}

function Api() {

    const url = 'https://questionanswersapi.azurewebsites.net/api/Questions';
    const [questions, setQuestions] = useState<Ask[]>([{ firstName: "", lastName: "", title: "", question: "" }]);
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
                        <div> <Card className="cards">
                            <Card.Body className="cardbody"> <Card.Title>{qa.firstName} {qa.lastName}</Card.Title>
                                <Card.Title>{qa.title}</Card.Title>
                                <Card.Text> {qa.question} </Card.Text>
                            </Card.Body></Card> </div>
                    )
                })
            }
        </div>

    )
}



export default Api;