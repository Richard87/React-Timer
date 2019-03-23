import {useEffect, useState} from "react";
import app from "firebase/app";
import 'firebase/firestore';

const useDocument = (path, defaults) => {
    const [document, setDocument] = useState(defaults)
    const docRef = app.firestore().doc(path)

    useEffect(() => {
        const unsubscribe = docRef.onSnapshot(snapshot => {
            if (snapshot.exists)
                setDocument(snapshot.data())
            else {
                docRef.set(defaults)
            }
        })

        return () => unsubscribe()
    }, [path])

    const updateDocument = (data) => {
        docRef.set(data)
    }

    return [document, updateDocument]
}
export default useDocument