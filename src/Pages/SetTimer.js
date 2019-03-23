import {Button, Col, Form, FormGroup, Navbar, Row} from "react-bootstrap";
import React, {useEffect,useState} from "react";
import {withRouter} from "react-router-dom";
import useDocument from "../Hooks/useDocument";


const SetTimer = ({match, history}) => {
    const id = match.params.id
    const [{defaultTimeout = 0}, updateTimer] = useDocument(`timers/${id}`, {startAt: "", defaultTimeout: 30, remaining: 30})
    const [{hours,minutes,seconds}, setTimeout] = useState({hours: 0,minutes: 0,seconds: 0})

    useEffect(() => {
        const tmpHours = Math.floor(defaultTimeout / 3600);
        const tmpMinutes = Math.floor((defaultTimeout - (tmpHours * 3600)) / 60)
        const tmpSeconds = Math.floor(defaultTimeout - (tmpMinutes * 60) - (tmpHours * 3600));
        setTimeout({hours: tmpHours,minutes: tmpMinutes,seconds: tmpSeconds})
    }, [id, defaultTimeout])

    const onSubmit = () => {
        const newTimeout = (hours * 3600) + (minutes * 60) + seconds
        updateTimer({defaultTimeout: newTimeout, remaining: newTimeout, startAt: ""})
        history.push(`/${id}`)
    }
    const onCancel = () => {
        history.push(`/${id}`)
    }

    return (
        <Form>
            <br/><br/><br/><br/>
            <FormGroup as={Row}>
                <Form.Label size="lg" column xs="6" sm="2">
                    Hours:
                </Form.Label>
                <Col xs="6" sm="2">
                    <Form.Control min="0" size="lg" type="number" onChange={e => setTimeout({hours: Math.max(e.target.value, 0),minutes,seconds})} value={hours}/>
                </Col>


                <Form.Label size="lg" column xs="6" sm="2">
                    Minutes:
                </Form.Label>
                <Col xs="6" sm="2">
                    <Form.Control size="lg" type="number" onChange={e => setTimeout({hours,minutes: Math.max(e.target.value, 0),seconds})} value={minutes}/>
                </Col>


                <Form.Label size="lg" column xs="6" sm="2">
                    Seconds:
                </Form.Label>
                <Col xs="6" sm="2">
                    <Form.Control size="lg" type="number" onChange={e => setTimeout({hours,minutes,seconds: Math.max(e.target.value, 0)})} value={seconds}/>
                </Col>
            </FormGroup>

            <Navbar bg="dark" variant="dark" fixed="bottom" style={{justifyContent: "flex-end"}} >
                <Button type="button" variant="primary" onClick={onSubmit}>Save</Button>
                <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
            </Navbar>
    </Form>
)
}
export default withRouter(SetTimer)