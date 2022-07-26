import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Header, Profiles } from '../components';

export default function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src={logo} alt='Netflix' to={ROUTES.HOME} />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>
          Who's watching?
        </Profiles.Title>

        <Profiles.List>
          <Profiles.User
            data-testid="user-profile"
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
          >
            <Profiles.Picture src={user.photoURL} />

            <Profiles.Name>
              {user?.displayName}
            </Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
