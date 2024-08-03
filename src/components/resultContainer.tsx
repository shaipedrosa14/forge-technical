import BackgroundImageContent from "./backgroundImageContent";

interface ResultProps {
  scoreResults: number;
  totalScore: number
}
const ResultContainer: React.FC<ResultProps> = ({scoreResults, totalScore}) => {
    return (
      <div className="w-[1728px] h-[1117px] flex flex-col bg-home text-white justify-center relative ">
        <BackgroundImageContent imageUrl='/images/background-image.png' />
        <div className="grid grid-cols-2 gap-4">
          <div className="justify-center">
            <p className="font-bebas text-white font-quizLabel text-[300px]">BRAVO!</p>
            <p className="font-bebas text-white font-quizLabel text-[125px] mt-[-100px]">YOU HAVE SCORED</p>
            <p className="text-white font-sora text-[32px] underline text-end mr-[185px]">Wanna Play Again?</p>
          </div>
          <div className="bg-white w-[774px] h-[1235px]">
            <p className="font-bebas text-quizLabel font-quizLabel text-[380px]">{scoreResults}/{totalScore}</p>
          </div>
        </div>
      </div>
    )
}
export default ResultContainer