import { createContext, useState, useEffect, FC, PropsWithChildren } from 'react';
import { Question } from '../interfaces/question';
import { requestQuestions } from '../services/apiSupport';

// Define the shape of the context state
interface QuestionContextType {
  questions: Question[];
}

// Create the context with a default value
export const QuestionContext = createContext<QuestionContextType>({
  questions: [],
});


export const QuestionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    try {
      const res = await requestQuestions();
      setQuestions(res);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
};
