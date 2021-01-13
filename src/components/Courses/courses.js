import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './courses.module.css';

function Courses() {

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  }

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  }

  const handleClick3 = () => {
    setIsFlipped3(!isFlipped3);
  }

  const handleClick4 = () => {
    setIsFlipped4(!isFlipped4);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.mainheading}>Courses</h1>
      <div className={styles.div}>
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" className={styles.div}>
          <div>
            <div className={styles.heading1} onClick={handleClick1}>
              Artificial Intelligence
          </div>
          </div>
          <div>
            <div className={styles.div1} onClick={handleClick1}>
              A one year Cloud Native Computing program designed for absolute beginnners
              getting Pakitan Ready for the new era of Computing enabled by the rise
              of AI.
          </div>
          </div>
        </ReactCardFlip>
      </div>
      <div className={styles.div}>
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" className={styles.div}>
          <div>
            <div className={styles.heading2} onClick={handleClick2}>
              Cloud Native Computing
          </div>
          </div>
          <div>
            <div className={styles.div2} onClick={handleClick2}>
              A one year Cloud Native Computing program designed for absolute beginnners
              getting Pakitan Ready for the new era of Computing enabled by the rise
              of Cloud Native Computing.
          </div>
          </div>
        </ReactCardFlip>
      </div>
      <div className={styles.div}>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
          <div>
            <div className={styles.heading3} onClick={handleClick3}>
              Blockchain
          </div>
          </div>
          <div>
            <div className={styles.div3} onClick={handleClick3}>
              A one year Blockchain program designed for absolute beginnners
              etting Pakitan Ready for the new era of Blockchain, Fintech and smart contract.
          </div>
          </div>
        </ReactCardFlip>
      </div>
      <div className={styles.div}>
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" className={styles.div}>
          <div>
            <div className={styles.heading4} onClick={handleClick4}>
              Internet of Things
          </div>
          </div>
          <div>
            <div className={styles.div4} onClick={handleClick4}>
              A fifteen months IOT and AI program designed for absolute beginnners
              etting Pakitan Ready for the new era of Internet of Things and AI
          </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Courses;
