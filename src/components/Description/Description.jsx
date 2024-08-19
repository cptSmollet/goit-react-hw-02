import React from 'react';
import styles from './Description.module.css';

const Description = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}><span className={styles.spamTitle}>Sip</span> Happens Café</h2>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
};

export default Description;