import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);
  console.log(answers);

  function scoreCalculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexex = [];
      let checkIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexex.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexex, checkIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = scoreCalculate();

  return (
    <>
      {loading && <div> Loading ...</div>}
      {error && <div>There was an error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
