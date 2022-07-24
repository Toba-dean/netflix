import { useState, useContext } from "react";

import HeaderContainer from "../container/HeaderContainer";
import FooterContainer from "../container/FooterContainer";
import { Form } from "../components";
import * as ROUTES from '../constants/routes'

import { FirebaseContext } from '../context/firebase';
import { useHistory } from "react-router-dom";

export default function SignIn() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const isInValid = password === '' || email === '' || name === '';
  const handleSignIn = e => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => (
        user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
      ))
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(e => {
        setEmail('');
        setName('');
        setPassword('');
        setError(e.message);
      });
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {
            error && (
              <Form.Error>{error}</Form.Error>
            )
          }
          <Form.Base
            method='post'
            onSubmit={handleSignIn}
          >
            <Form.Input
              placeholder='Username'
              type='text'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <Form.Input
              placeholder='Email Address'
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Form.Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit
              type='submit'
              disabled={isInValid}
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
