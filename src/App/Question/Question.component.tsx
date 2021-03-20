import React from 'react';
import type {
  FC,
  MouseEventHandler,
} from 'react';

import Button from '@app/Button';

import styles from './Question.module.css';
import { OPERATOR_MAP } from './Question.model';

interface Props {
  question: string;
  skip: MouseEventHandler;
}

const Question: FC<Props> = ({
  question,
  skip,
}) => {
  for (const key in OPERATOR_MAP)
    question = question.replace(
      new RegExp('\\' + key),
      OPERATOR_MAP[key]
    );

  return (
    <div className={styles.Container}>
      <Button
        type="button"
        onClick={skip}
      >
        Skip Question
      </Button>
      <div className={styles.Question}>
        {question}
      </div>
    </div>
  );
};

export default Question;
