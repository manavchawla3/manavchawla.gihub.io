import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Database from '../../../static/icons/database.svg';
import Server from '../../../static/icons/Server.svg';
import Web from '../../../static/icons/web.svg';
import Scroll_Down from '../../../static/icons/scroll_down.svg';

export default function Home() {
  return (
    <div id="home" className="home section">
      <div className="d-flex flex-column justify-content-center">
        <span className="misc-content">I am</span>
        <span className="name mt-3">Manav Chawla</span>
      </div>
      <div className="d-flex flex-column justify-content-center pt-5">
        <span className="misc-content">I’m a</span>
        <span className="role typewriter mt-3">Full Stack Developer</span>
      </div>
      <div className="d-flex flex-row pt-5 justify-content-center developer-icons">
        <Database className="mx-5" />
        <Server className="mx-5" />
        <Web className="mx-5" />
      </div>
      <AnchorLink to="/#about" className="scroll-down-container">
        <span>
          <Scroll_Down />
        </span>
      </AnchorLink>
    </div>
  );
}
