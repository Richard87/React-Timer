import {useEffect, useState} from "react";
import moment from "moment";

const useTimer = (startAt, remainingSeconds) => {
    const [remaining, setRemaining] = useState(formatTime(moment(), remainingSeconds))

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

    const target = moment(startAt).add(remainingSeconds, "seconds")
    const now = moment()
    let hours = Math.abs(target.diff(now, "hours"))
    let minutes = Math.abs(target.diff(now, "minutes"))
    let seconds = Math.abs(target.diff(now, "seconds")) % 60
    let isAfter = now.isAfter(target)

    if (hours.toString().length === 1)
        hours = "0" + hours.toString()
    if (minutes.toString().length === 1)
        minutes = "0" + minutes.toString()
    if (seconds.toString().length === 1)
        seconds = "0" + seconds.toString()
    const prefix = isAfter ? "- " : "";

    return `${prefix}${hours}:${minutes}:${seconds}`
}