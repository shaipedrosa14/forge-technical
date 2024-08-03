import { useContext, useState } from "react"
import BackgroundImageContent from "./backgroundImageContent"
import { QuestionContext } from "../providers/QuestionProvider"
import { Question } from "../interfaces/question"
import _ from 'lodash'

const QuizContainer: React.FC = () => {
  const { questions } = useContext(QuestionContext)
  const [indexCounter, setIndexCounter] = useState(0)

  const getChoices = (currentQuestion: Question): JSX.Element[]  => {
    const choices = Object.keys(currentQuestion.answers).map(option => { return (
      <>
      {!_.isNil(currentQuestion.answers[option]) && (
      <button key={option} className={`group min-w-[700px] min-h-[100px] max-w-[1700px] border-2 border-quizLabel px-3 py-3 hover:bg-home`}
        onClick={() => handleAnswerClick(option)}>
        <div className="flex flex-row text-start space-x-8  hover:text-white focus:text-white active:text-white">
          <div className="w-[50px] h-[50px] bg-home rounded-full group-hover:ring-white group-hover:focus">
            <p className="text-white text-[30px] font-bebas text-center">{getLetter(option)}</p>
          </div>
          <p className="text-wrap text-[24px] font-sora text-quizLabel text-start group-hover:text-white">
            {currentQuestion.answers[option]}
          </p>
        </div>
      </button>
      )}
      </>
    )})
    return choices
  }

  const getLetter = (letterKey: string): string => {
    const value = letterKey.split('_')[1]
    return value.toUpperCase()
  }

  const handleAnswerClick = (answerKey: string) => {
   // TO-DO
   console.log(answerKey)
  };

  const handleNextBtn = () => {
    const newIndex = indexCounter + 1
    setIndexCounter(newIndex)
  }

  return (
    <>
    {indexCounter !== questions.length-1 ? (
    <div className="w-[1728px] h-[1117px] flex flex-col bg-quizContainer text-white items-center relative ">
      <BackgroundImageContent imageUrl="/images/quiz-background-image.png"/>
      <div className="flex flex-col max-w-[856px] mb-[30px] mt-[80px]">
        <div>
          <h1 className="text-quizLabel text-[96px] font-bebas text-center">QUESTION {`${indexCounter+1}/${questions.length}`}</h1>
        </div>
        <div>
          <p className="text-wrap text-[36px] font-sora text-quizLabel text-center">{questions[indexCounter].question}</p>
        </div>
      </div>
      <div className="flex flex-col max-w-[856px] space-y-4">
        {getChoices(questions[indexCounter])}
      </div>
      <button className="w-[150px] h-[75px] bg-btnNext text-[30px] font-sora self-center mt-[50px]  hover:bg-home focus:bg-home" onClick={() => handleNextBtn()}>Next</button>
    </div>
    ):(
      <h1>hELLO</h1>
    )}
  </>
  )
}
export default QuizContainer