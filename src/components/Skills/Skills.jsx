import React from 'react'

import styles from "./Skills.module.css"
import { getImageUrl } from '../../utils'

export const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h2 className={styles.title}>
            Skills
        </h2>
        <div className={styles.slider}>
            <div className={styles.slideTrack}>
                {/* <!-- Img Code --> */}
                <div className={styles.slide}>
                    <img src= {getImageUrl('skills/html.png')} alt="HTML logo"/>
                    <p>HTML</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/css.png')} alt="CSS logo"/>
                    <p>CSS</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/react.png')} alt="React logo"/>
                    <p>React</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/py.png')} alt="Python logo"/>
                    <p>Python</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/unity.png')} alt="Unity logo"/>
                    <p>Unity</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/sketchup.png')} alt="SketchUp logo"/>
                    <p>SketchUp</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/photoshop.png')} alt="Photoshop logo"/>
                    <p>Photoshop</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/github.png')} alt="Github logo"/>
                    <p>Github</p>
                </div>
                {/* Duplicate images */}
                <div className={styles.slide}>
                    <img src= {getImageUrl('skills/html.png')} alt="HTML logo"/>
                    <p>HTML</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/css.png')} alt="CSS logo"/>
                    <p>CSS</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/react.png')} alt="React logo"/>
                    <p>React</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/py.png')} alt="Python logo"/>
                    <p>Python</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/unity.png')} alt="Unity logo"/>
                    <p>Unity</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/sketchup.png')} alt="SketchUp logo"/>
                    <p>SketchUp</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/photoshop.png')} alt="Photoshop logo"/>
                    <p>Photoshop</p>
                </div>
                <div className={styles.slide}>
                    <img src={getImageUrl('skills/github.png')} alt="Github logo"/>
                    <p>Github</p>
                </div>
            </div>
        </div>
    </section>
  )
}
