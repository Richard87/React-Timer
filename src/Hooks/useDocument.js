import {useEffect, useState} from "react";
import {firestore} from "firebase";

const useDocument = (path, defaults) => {
    const [document, setDocument] = useState(defaults)
    const docRef = firestore().doc(path)

    useEffect(() => {
        const unsubscribe = docRef.onSnapshot(snapshot => {
            if (snapshot.exists)
                setDocument(snapshot.data())
        })

        return () => unsubscribe()
    }, [path])

    const updateDocument = (data) => {
        docRef.set(data)
    }

    return [document, updateDocument]
}
export default useDocument