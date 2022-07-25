import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {

  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  useEffect(() => {
    db.collection(target)
      .get()
      .then(snapShot => {
        const allContent = snapShot.docs.map(content => ({
          ...content.data(),
          docId: content.id
        }));

        setContent(allContent);
      })
      .catch(e => {
        console.log(e.message);
      })

      console.log(content);
  }, [])

  return { [target]: content }
}
