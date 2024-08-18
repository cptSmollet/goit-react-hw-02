import React from 'react';
import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback, onResetFeedback }) => (
  <div className={styles.container}>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
  </div>
);

export default Options;