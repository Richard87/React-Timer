import {useEffect, useState} from "react";
import {firestore} from "firebase";

const useDocument = (path) => {
    const [document, setDocument] = useState({})
    const docRef = firestore().doc(path)

    useEffect(() => {
        const unsubscribe = docRef.onSnapshot(snapshot => setDocument(snapshot.data()))
        return () => unsubscribe()
    }, [path])

    const updateDocument = (data) => {
        docRef.set(data)
    }

    return [document, updateDocument]
}
export default useDocument