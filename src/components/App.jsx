import React, { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import Description from './Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

    return (
      <div>
        <Description />  
        <Options onLeaveFeedback={updateFeedback} totalFeedback={totalFeedback} onResetFeedback={resetFeedback} />
        {totalFeedback > 0 ? (
          <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positiveFeedbackPercentage} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  };
  
  export default App;