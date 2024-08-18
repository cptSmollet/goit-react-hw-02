import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => (
  <div className={styles.list}>
    <p className={styles.item}>Good: {feedback.good}</p>
    <p className={styles.item}>Neutral: {feedback.neutral}</p>
    <p className={styles.item}>Bad: {feedback.bad}</p>
    <p className={styles.item}>Total: {total}</p>
    <p className={styles.item}>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;