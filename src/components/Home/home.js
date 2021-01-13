import React from 'react';
import Typewriter from 'typewriter-effect'
import styles from './home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>PIAIC</h1>
            <div className={styles.nav}>
                <nav>
                    <ul>
                        <li><a to="/">Home</a></li>
                        <li><a to="courses">Courses</a></li>
                        <li><a to="about">About</a></li>
                        <li><a to="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.typewriter}>
                <p>PIAIC is Established to</p>
                <Typewriter
                    options={{
                        strings: ["empower youth", "make Pakistan Technologies hub", "make a unicorn software company"],
                        autoStart: true,
                        loop: true,
                        cursorClassName: "Typewriter__cursor"
                    }}
                />
            </div>
        </div>
    );
}

export default Home;