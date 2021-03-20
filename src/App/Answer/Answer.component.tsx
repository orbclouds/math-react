import React from 'react';
import type {
  FC,
  MouseEventHandler,
} from 'react';

import Button from '@app/Button';

import styles from './Answer.module.css';
import useHooks, {
  Args as HookArgs,
} from './Answer.hooks';

type Props = HookArgs;

const Answer: FC<Props> = ({
  answer,
  next,
}) => {
  const {
    check,
    userAnswer,
    updateUserAnswer,
  } = useHooks({
    answer,
    next,
  });

  return (
    <form
      id="answer-form"
      onSubmit={check}
      className={styles.Form}
    >
      <label htmlFor="answer">
        Answer:
      </label>
      <input
        required
        id="answer"
        type="number"
        name="answer"
        value={userAnswer}
        className={styles.Input}
        onChange={updateUserAnswer}
      />
      <Button
        form="answer-form"
        type="submit"
      >
        Check
      </Button>
    </form>
  );
};

export default Answer;
