import { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import ProfileContainer from './ProfileContainer';
import { BrowseHeader, Loading } from '../components';

export default function BrowseContainer({ slides }) {

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [profile.displayName])

  return (
    profile.displayName ? (
      <>
        {
          loading ? (
            <Loading src={profile.photoURL} />
          ) : (
            <Loading.ReleaseBody />
          )
        }
        <BrowseHeader user={user} firebase={firebase} />
      </>
    ) : (
      <ProfileContainer user={user} setProfile={setProfile} />
    )
  )
}