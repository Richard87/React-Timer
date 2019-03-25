import {useRef} from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import React from "react";

const Init = ({history}) => {
    const controlRef = useRef()

    const seeTimer = () => {
        history.push("/" + controlRef.current.value.toString().toLowerCase())
    }

    return <div style={{marginTop: "1em"}}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Timer kode</Form.Label>
            <Form.Control ref={controlRef} type="text" placeholder="abCde" />
            <Form.Text>Enter any code to see a timer, or create a new...</Form.Text>
        </Form.Group>
        <Button onClick={seeTimer}>Open timer</Button>
    </div>
}
export default withRouter(Init)