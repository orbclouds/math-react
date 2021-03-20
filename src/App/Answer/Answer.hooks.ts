import {
  useState,
  useCallback,
} from 'react';
import type {
  FormEventHandler,
  ChangeEventHandler,
} from 'react';

export interface Args {
  answer: number;
  next: () => void;
}

interface Hooks {
  userAnswer: string;
  check: FormEventHandler;
  updateUserAnswer: ChangeEventHandler;
}

const useHooks = ({
  answer,
  next,
}: Args): Hooks => {
  const [
    userAnswer,
    setUserAnswer,
  ] = useState('');

  const updateUserAnswer: ChangeEventHandler = useCallback(
    ({ target, currentTarget }) => {
      if (target !== currentTarget)
        return;
      const {
        value,
      } = currentTarget as HTMLInputElement;
      setUserAnswer(value);
    },
    []
  );

  const check = useCallback(
    (e) => {
      e.preventDefault();
      if (
        parseInt(userAnswer) === answer
      ) {
        alert('Correct!');
        next();
      } else {
        alert(
          "Sorry, that's incorrect!"
        );
      }
    },
    [next, answer, userAnswer]
  );

  return {
    check,
    userAnswer,
    updateUserAnswer,
  };
};

export default useHooks;
