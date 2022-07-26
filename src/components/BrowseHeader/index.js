import { useState } from 'react';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo.svg';
import Header from "../Header"

export default function BrowseHeader({ user, firebase }) {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Header src="joker1" dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src={logo} alt='Netflix' to={ROUTES.HOME} />
          <Header.TextLink>Series</Header.TextLink>
          <Header.TextLink>Films</Header.TextLink>
        </Header.Group>

        <Header.Group>
          <Header.Search
            searchTern={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>

      <Header.Feature>
        <Header.FeatureCallOut>
          Watch Joker Now
        </Header.FeatureCallOut>

        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him.
        </Header.Text>

        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>
  )
}
