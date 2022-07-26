// import { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Feature, Profile, Text } from './styles/Header.styles';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}



Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return (
    <Profile {...restProps}>
      {children}
    </Profile>
  );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return (
    <Feature>
      {children}
    </Feature>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  );
};