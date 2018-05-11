import React from 'react';

import Container from '../components/container';
import styles from './about-css-modules.module.css';

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>
);


export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS modules are so cool</p>
    <User
      username="Bill Murray"
      avatar="http://fillmurray.com/96/96"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <User
      username="Another Bill Murray"
      avatar="http://fillmurray.com/128/128"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />

  </Container>
);
