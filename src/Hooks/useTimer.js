import {useEffect, useState} from "react";
import moment from "moment";

const useTimer = (startAt, remainingSeconds) => {
    const now = moment()
    const [remaining, setRemaining] = useState("00:00:00")

    useEffect(() => {
        if (startAt) {
            const interval = setInterval(() => {
                setRemaining(formatTime(startAt, remainingSeconds))
            }, 100)
            return () => clearInterval(interval)
        } else {
            setRemaining(formatTime(moment(), remainingSeconds))
        }
    }, [startAt, remainingSeconds])

    return remaining
}
export default useTimer


const formatTime = (startAt, remainingSeconds) => {
    const now = moment()
    const target = moment(startAt).add(remainingSeconds, "seconds")
    const isAfter = now.isAfter(target)

    let remaining = Math.abs(target.diff(now, "seconds"));
    let hours = Math.abs(Math.floor(remaining / 3600))
    let minutes = Math.abs(Math.floor((remaining - (hours * 3600)) / 60))
    let seconds = Math.abs(Math.floor(remaining - (hours * 3600) - (minutes * 60)))

    if (hours.toString().length === 1)
        hours = "0" + hours.toString()
    if (minutes.toString().length === 1)
        minutes = "0" + minutes.toString()
    if (seconds.toString().length === 1)
        seconds = "0" + seconds.toString()
    const prefix = isAfter ? "-" : "";

    return `${prefix}${hours}:${minutes}:${seconds}`
}