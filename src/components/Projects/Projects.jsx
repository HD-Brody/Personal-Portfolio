import React from 'react'

import styles from "./Projects.module.css"
import { getImageUrl } from '../../utils'

export const Projects = () => {
  return (
    <section id='projects'>
        <h2 className={styles.title}>
            My Projects
        </h2>
        <ul className={styles.projects}>
            <li className={styles.project}>
                    <div className={styles.projectText}>
                        <h1>
                            Pixelize
                        </h1>
                        <h2>
                            Made with: Python, Pygame
                        </h2>
                        <p>
                            Pixelize is a pixel art software made using the Pygame Python library. In Pixelize, you can create complex works of pixel art which can be exported for use in video games and more.
                        </p>
                        <a href="https://github.com/HD-Brody/Pixelize" target='_blank' className={styles.githubBtn}>
                            <img src={getImageUrl("skills/github.png")} alt="Github icon" />
                            GitHub
                        </a>
                    </div>
                <img 
                    src={getImageUrl("projects/pixelize.png")} 
                    alt="Pixelize image"
                    className={styles.projectImage} 
                />
            </li>

            {/* <li className={styles.project}>
                <div className={styles.projectText}>
                    <h1>
                        Sudoku Solver
                    </h1>
                    <h2>
                        Made with:
                    </h2>
                    <p>
                    Sudoku generator and solver using the Pygame Python library.
                    </p>
                </div>
                <img 
                    src={getImageUrl("projects/sudoku.JPG")} 
                    alt="Sudoku image"
                    className={styles.projectImage} 
                />
            </li> */}
        </ul>
    </section>
  )
}
