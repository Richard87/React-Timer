import moment from "moment";
import {Button, Navbar} from "react-bootstrap";
import React from "react";
import StretchedText from "../Components/StretchedText";
import {withRouter} from "react-router-dom";
import useDocument from "../Hooks/useDocument";
import useTimer from "../Hooks/useTimer";

const Timer = ({match, history}) => {
    const id = match.params.id
    const [{startAt: startAtStr, defaultTimeout, remaining}, updateTimer] = useDocument(`timers/${id}`, {startAt: "", defaultTimeout: 30, remaining: 30})
    const startAt = startAtStr ? moment(startAtStr) : null;
    const isPaused = !startAt
    const formattedTime = useTimer(startAt, remaining)

    const onPause = () => {
        const target = moment(startAt).add(remaining, "seconds")
        const tmp = target.diff(moment(), "seconds")
        updateTimer({startAt: "", defaultTimeout, remaining: tmp})
    }

    const onStart = () => {
        const now = moment().toISOString()
        updateTimer({startAt: now, defaultTimeout, remaining})
    }
    const isFullscreen = !!document.fullscreenElement
    const onReset = () => {
        updateTimer({startAt: "", defaultTimeout, remaining: defaultTimeout})
    }

    const onFullscreen = () => {
        const el = document.querySelector("#root")
        if (!isFullscreen) {
            //Goto fullscreen
            el.requestFullscreen()
        } else {
            //exit fullscreen
            if (document.exitFullscreen)
                document.exitFullscreen();
        }
    }

    return <div style={{display:"flex", justifyContent: "space-around",flexDirection: "column",height: "100%"}}>
        <StretchedText color="white" style={{marginTop: "-2em"}}>{formattedTime}</StretchedText>

        <Navbar bg="dark" variant="dark" fixed="bottom" style={{justifyContent: "flex-end"}} >
            {!isPaused && <>
                <Button bg="dark" variant="primary" onClick={onPause}>Pause</Button>
                {(!isFullscreen || document.exitFullscreen) && <Button bg="dark" variant="secondary" onClick={onFullscreen}>{isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}</Button>}
            </>}
            {isPaused && <>
                <Button bg="dark" variant="primary" onClick={onStart}>Start</Button>
                <Button bg="dark" variant="secondary" onClick={() => history.push(`/${id}/set`)}>Set timer</Button>
                <Button bg="dark" variant="secondary" onClick={onReset}>Reset</Button></>
            }
        </Navbar>
    </div>
}
export default withRouter(Timer)


