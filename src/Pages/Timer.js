import moment from "moment";
import {Button, Navbar} from "react-bootstrap";
import React from "react";
import StretchedText from "../Components/StretchedText";
import {withRouter} from "react-router-dom";
import useDocument from "../Hooks/useDocument";
import useTimer from "../Hooks/useTimer";

const Timer = ({match}) => {
    const id = match.params.id
    const [{startAt: startAtStr, defaultTimeout, remaining}, updateTimer] = useDocument(`timers/${id}`)
    const startAt = startAtStr ? moment(startAtStr) : null;
    const isPaused = !startAt

    const formattedTime = useTimer(startAt, remaining)

    const onPause = () => {
        const target = moment(startAt).add(remaining)
        const tmp = remaining - moment().diff(target, "seconds")
        updateTimer({startAt: "", defaultTimeout, remaining: tmp})
    }

    const onStart = () => {
        const now = moment().format("MM.DD.YYYY HH:mm:ss")
        updateTimer({startAt: now, defaultTimeout, remaining})
    }

    const onReset = () => {
        updateTimer({startAt: "", defaultTimeout, remaining: defaultTimeout})
    }

    return <>
        <br/><br/><br/><br/>
        <StretchedText>{formattedTime}</StretchedText>

        <Navbar bg="light" expand="lg" fixed="bottom" >
            {isPaused ? <Button variant="primary" onClick={onStart}>Start</Button> : <Button variant="primary" onClick={onPause}>Pause</Button>}
            {isPaused && <><Button variant="default">Set timer</Button><Button variant="default" onClick={onReset}>Reset</Button></>}
        </Navbar>
    </>
}
export default withRouter(Timer)


