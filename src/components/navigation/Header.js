import React from "react";

import Container from "../helpers/Container";
import links from "../../data/links";
import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo';
import Show from '../helpers/Show';

const Header = () => {
  const [isMobile, setMobile] = React.useState(false);
  const [showingLinks, setShowingLinks] = React.useState(false);

  window.addEventListener('resize', () => {
    setMobile(window.innerWidth <= 425);
  });

  React.useLayoutEffect(() => {
    window.dispatchEvent(new Event("resize"));
  });

  const toggleLinks = () => {
    setShowingLinks(!showingLinks);
  }

  return (
    <header className="Header">
      <Container className="Header-container">
        <div>
          <Logo />
        </div>
        <div className="Header-links-container">
          <Show if={isMobile}>
            <button className="Header-hamburger" onClick={toggleLinks}>☰</button>
          </Show>

          <Show if={!isMobile || showingLinks}>
            <ul className="Header-links">
              {links.map((link, i) => (
                <li key={i}><Link to={link.href}>{link.name}</Link></li>
              ))}
            </ul>
          </Show>
        </div>
      </Container>
    </header>
  )
};

export default Header;