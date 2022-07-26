import { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import ProfileContainer from './ProfileContainer';
import { Header, Loading } from '../components';

export default function BrowseContainer({ slides }) {

  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState({});
  const user = firebase.auth().currentUser || {};
  const [loading, setLoading] = useState(true);

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

        <Header src="joker1">
          <Header.Feature>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </Header.Text>
          </Header.Feature>
        </Header>
      </>
    ) : (
      <ProfileContainer user={user} setProfile={setProfile} />
    )
  )
}