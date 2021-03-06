import React from 'react';
import type { FC } from 'react';

import Orb from '@app/Orb';

import Answer from './Answer';
import Question from './Question';

import useHooks from './App.hooks';
import styles from './App.module.css';

const App: FC = () => {
  const {
    question,
    generateQuestion,
  } = useHooks();
  return (
    <>
      <Orb />
      <main className={styles.Container}>
        <Question
          question={question}
          skip={generateQuestion}
        />
        <Answer
          answer={eval(question)}
          next={generateQuestion}
        />
      </main>
    </>
  );
};

export default App;
