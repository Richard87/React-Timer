import {useRef} from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import React from "react";

const Init = ({history}) => {
    const controlRef = useRef()

    const seeTimer = () => {
        history.push("/" + controlRef.current.value)
    }

    return <>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Timer kode</Form.Label>
            <Form.Control ref={controlRef} type="text" placeholder="abCde" defaultValue="skil" />
            <Form.Text>Enter any code to see a timer, or create a new...</Form.Text>
        </Form.Group>
        <Button onClick={seeTimer}>Open timer</Button>
    </>
}
export default withRouter(Init)