export interface Question {
  id: number;
  question: string;
  description: string
  answers: Answers;
  multiple_correct_answers: boolean;
  correct_answers: object;
  explanation: string;
  tip: string | null;
  category: string;
  difficulty: string;
  selected_answers?: Array<string>
}

export interface Answers {
  [key: string]: string | null;
}