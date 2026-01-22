import image from "../assets/images/Tutorial_01.png";
import classes from "../styles/Video.module.css";

export default function Video() {
  return (
    <div className={classes.video}>
      <img src={image} alt="Video Title" />
      <p>#01 Java - Thread Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}
