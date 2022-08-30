import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import { navLinks } from '../../utils/constants';
import HomepageHeading from './HomepageHeading';

export default function HeaderMenu({ children }) {
  const [fixed, setFixed] = useState(null);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large">
            <Container>
              {navLinks.map((link, index) => (
                <Link href={link.path} key={index}>
                  <Menu.Item active={index === 0}>{link.name}</Menu.Item>
                </Link>
              ))}
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {children}
    </>
  );
}
