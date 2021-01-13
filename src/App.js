import React from 'react';
import Home from './components/Home/home';
import Courses from './components/Courses/courses';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Home />
      <Courses />
    </div>
  );
}

export default App;
