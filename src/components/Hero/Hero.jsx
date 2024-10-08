import React from 'react';

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Brody
            </h1>
            <p className={styles.description}>
                I'm a Computer Science with a passion for all things tech. Reach out if you'd like to chat!
            </p>
            <a href="mailto:0707bhd@email.com" className={styles.contactBtn}>
              Contact Me</a>
        </div>
        <img 
          src={getImageUrl('hero/heroImage2.png')} 
          alt="Hero image of me" 
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    
  );
};
