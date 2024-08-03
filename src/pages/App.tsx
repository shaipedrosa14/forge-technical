import { useState } from "react";
import "./../assets/styles/App.css";
import BackgroundImageContent from './../components/backgroundImageContent'
import QuizContainer from "../components/quizContainer";

const App: React.FC = () => {
  const [showQuestions, setShowQuestions] = useState(false)

  const handleClick = () => {
    console.log("Clicked");
    setShowQuestions(true);
  };

  return (
    <>
      {showQuestions === false ? (
      <div className="w-[1728px] h-[1117px] flex flex-col bg-home text-white justify-center relative ">
        <BackgroundImageContent imageUrl='/images/background-image.png' />
        <div className="flex flex-col mr-[200px]">
          <h1 className="text-[280px] font-bebas self-end"> QUIZZLER </h1>
          <div className="flex flex-row space-x-4 self-end mt-[-110px] mb-[50px]">
            <p className="font-sora text-[14px]">By:</p>
            <img src="/images/forge-logo.svg"/>
          </div>
          <div className="flex flex-row space-x-4 self-end cursor-pointer" onClick={handleClick}>
            <p className="font-sora text-[32px]">Let's start the quiz</p>
            <img src="/images/arrow.svg"/>
          </div>   
        </div>
      </div>
      ):( 
        <QuizContainer />
      )}
    </>
  );
}

export default App;
