import Graf from "../Graf.tsx";
import styles from "./LineStyle.module.css";
import { useState } from "react";
import { IData } from "../../types.ts";

type LineProps = {
  Elem: IData;
};
const Line: React.FC<LineProps> = ({ Elem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.block} onClick={() => setOpen(!open)}>
        <div className={`${styles.elem} ${styles.grey}`}>{Elem.name}</div>
        <div className={`${styles.elem} ${styles.blue}`}>{Elem.thisDay}</div>
        <div
          className={`${styles.elem} ${
            Elem.thisDay === Elem.lastDay
              ? styles.grey
              : Elem.thisDay > Elem.lastDay
              ? styles.green
              : styles.red
          }`}
        >
          {Elem.lastDay}
          <span
            className={`${styles.elem} ${
              Elem.thisDay === Elem.lastDay
                ? styles.grey
                : Elem.thisDay > Elem.lastDay
                ? styles.greenText
                : styles.redText
            }`}
          >
            {Math.round((1 - Elem.lastDay / Elem.thisDay) * 100)}%
          </span>
        </div>
        <div
          className={`${styles.elem} ${
            Elem.thisDay === Elem.dayOfWeek
              ? styles.grey
              : Elem.thisDay > Elem.dayOfWeek
              ? styles.green
              : styles.red
          }`}
        >
          {Elem.dayOfWeek}{" "}
          <span
            className={`${styles.elem} ${
              Elem.thisDay === Elem.dayOfWeek
                ? styles.grey
                : Elem.thisDay > Elem.dayOfWeek
                ? styles.greenText
                : styles.redText
            }`}
          >
            {Math.round((1 - Elem.dayOfWeek / Elem.thisDay) * 100)}%
          </span>
        </div>
      </div>
      {open ? <Graf dataLine={[Elem]} /> : null}
    </div>
  );
};

export default Line;
