import React from "react";
import { Link } from 'react-router-dom';

import Container from '../helpers/Container';
import './Footer.css';
import links from "../../data/links";

const Footer = () => (
  <footer className="Footer">
    <Container className="Footer-container">
      <div>
        <ul className="Footer-links">
          {links.map((link, i) => (
            <li key={i}><Link to={link.href}>{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div>&copy;Taco Shack 2019</div>
    </Container>
  </footer>
);

export default Footer;