import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About Me
        </h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImg.jpg")} 
                alt="Me looking at the sky" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/books.png")} alt="Books icon" className={styles.aboutIcons}/>
                    <div className={styles.aboutItemText}>
                        <h3>
                            School
                        </h3>
                        <p>
                            I am currently a Computer Science undergraduate at the University of Toronto. I intend on pursuing a specialist in Computer Science with a minor in Math.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/interests.png")} alt="Interests icon" className={styles.aboutIcons}/>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Interests
                        </h3>
                        <p>
                            My interests lie in Machine learning and Artificial Intelligence. I'm particularly drawn to how cutting-edge AI technology can be applied to real-world scenarios.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/art.png")} alt="Art icon" className={styles.aboutIcons}/>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Hobbies
                        </h3>
                        <p>
                            In the meantime, I love making art. While I enjoy exploring all different mediums, I like to focus particularly on intricate pen and pencil works. Feel free to check out my stuff&nbsp;
                            <a href="https://www.artstation.com/bhd_art" target='_blank' className={styles.artLink}>
                                here
                            </a>!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
