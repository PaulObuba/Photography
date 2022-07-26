import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <footer className="footer">
<a href="mailto:hello@jane.dev" class="footer__link">hello@mary.james</a>
      <ul class="social-list">
        <li class="social-list__item">
          <a class="social-list__link" target="__black" href="https://codepen.io">
            <i class="fab fa-codepen"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link" target="__black" href="http://dribbble.com">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link" target="__black" href="https://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link" target="__black" href="https://github.com">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
   </footer>
  )
}

export default Footer;
