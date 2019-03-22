import {useEffect} from "react";

const useInterval = (handler, interval = 100) => {
    useEffect(() => {
        const id = setInterval(handler, interval)
        return () => clearInterval(id)
    }, [handler])
}
export default useInterval