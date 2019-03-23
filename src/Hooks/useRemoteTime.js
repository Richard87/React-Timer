import {useState, useEffect} from "react"
import moment from "moment";

const useRemoteTime = () => {
    const [{now,local}, setNow] = useState({now: moment(), local: moment()})

    useEffect(() => {
        let unmounting = false
        const updateRemoteTime = () => {
            fetch("/index.html", {method: 'head'})
                .then(response => {
                    let header = response.headers.get("x-timer");
                    if (!header) return

                    let xTimers = header.split(",");
                    if (xTimers.length !== 3) return

                    let xTimer = xTimers[0].substr(1)

                    let tmp = moment.unix(xTimer)

                    if (!unmounting)
                        setNow({now: tmp, local: moment(tmp)})
                })
        };
        const fetchId = setInterval(updateRemoteTime, 10000)
        updateRemoteTime()

        const timeId = setInterval(() => {
            const tmp = moment()
            const diff = tmp.diff(local, "milliseconds")

            const newNow = moment(now).add(diff, "milliseconds");
            setNow({now: newNow, local: tmp})

        }, 200)

        return () => {
            unmounting = true
            clearInterval(fetchId)
            clearInterval(timeId)
        }
    }, [])

    return now
}
export default useRemoteTime