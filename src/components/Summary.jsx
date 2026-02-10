import successImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  
  const API_KEY = import.meta.env.VITE_PEXEL_API_KEY;

  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  };

  // Using memo for not multiple loading but its constly
  // const getKeyword = useMemo(() => {
  //   if ((score / (noq * 5)) * 100 < 50) {
  //     return "failed";
  //   } else if ((score / (noq * 5)) * 100 < 75) {
  //     return "good";
  //   } else if ((score / (noq * 5)) * 100 < 100) {
  //     return "very good";
  //   } else {
  //     return "excellent";
  //   }
  // }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      Authorization: API_KEY,
    },
  );

  const image = result ? result.photos[0].src.medium : successImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
