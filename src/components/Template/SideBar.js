import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Duncan Harvey</h2>
        <p><a href="mailto:duncanpharvey@gmail.com">duncanpharvey@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Duncan. I am a <a href="https://middlebury.edu/">Middlebury</a> Physics graduate and a Technical Solutions Operations Engineer at Datadog.
        Previously I taught on educational sailing ships at <a href="https://sea.edu">Sea Education Association &#40;SEA&#41;</a> and <a href="https://callofthesea.org">Call of the Sea</a> and
        also worked at <a href="https://www.epic.com">Epic</a> and <a href="https://veyo.com">Veyo</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Duncan Harvey <Link to="/">duncanpharvey.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
