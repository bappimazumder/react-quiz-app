import { useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  const [open, setOpen] = useState(false);
  console.log({ title });
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={`${classes.miniPlayer} ${open ? "" : classes.floatingBtn}`}>
      {!open && (
        <span
          className={`material-icons-outlined ${classes.open}`}
          onClick={() => setOpen(true)}
        >
          play_circle_filled
        </span>
      )}

      {open && (
        <span
          className={`material-icons-outlined ${classes.close}`}
          onClick={() => setOpen(false)}
        >
          close
        </span>
      )}

      {open && (
        <div onClick={(e) => e.stopPropagation()}>
          <ReactPlayer
            className={classes.player}
            src={videoUrl}
            width="100%"
            height="100%"
            playing={open}
            controls
            muted={true}
          />
        </div>
      )}

      <p>{title}</p>
    </div>
  );
}
