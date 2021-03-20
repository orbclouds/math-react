import {
  useState,
  useEffect,
  useCallback,
} from 'react';

import { randomInt } from './App.utils';
import { OPERATORS } from './App.model';

interface Hooks {
  question: string;
  generateQuestion: () => void;
}

const useHooks = (): Hooks => {
  const [
    question,
    setQuestion,
  ] = useState('');

  const generateQuestion = useCallback(() => {
    let [x, y] = new Array(2)
      .fill(null)
      .map(() => randomInt(-100, 100));

    const operator =
      OPERATORS[randomInt(0, 3)];
    const newQuestion = `${x} ${operator} ${
      y < 0 ? '(' + y + ')' : y
    }`;

    setQuestion(newQuestion);
  }, [OPERATORS, randomInt]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  return { question, generateQuestion };
};

export default useHooks;
