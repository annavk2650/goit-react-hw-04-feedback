import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification';
import { Conteiner } from './Conteiner.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  // const countTotalFeedback = () => {
  //   const total = good + neutral + bad;
  //   return total;
  // };

  const countPositiveFeedbackPercentage = () => {
    const result = total;
    const totalPercentage = (good * 100) / result || 0;
    return Math.round(totalPercentage);
  };

  return (
    <Conteiner>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            // total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Conteiner>
  );
}
