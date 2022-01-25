import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { abs_config } from "../../config";
import styles from "./AbsPage.module.css";

import QuestionPane from "../../components/QuestionPane";

const organSelected = (activeElement) => {
  let highlight_organ = "";
  let active_organ = "";
  if (activeElement === 1) {
    highlight_organ = abs_config.highlight.UMBILICUS_IMG_PATH;
    active_organ = abs_config.active.UMBILICUS_IMG_PATH;
  } else if (activeElement === 2) {
    highlight_organ = abs_config.highlight.EPIGASTRIUM_IMG_PATH;
    active_organ = abs_config.active.EPIGASTRIUM_IMG_PATH;
  } else if (activeElement === 3) {
    highlight_organ = abs_config.highlight.RUQ_IMG_PATH;
    active_organ = abs_config.active.RUQ_IMG_PATH;
  } else if (activeElement === 4) {
    highlight_organ = abs_config.highlight.RLQ_IMG_PATH;
    active_organ = abs_config.active.RLQ_IMG_PATH;
  } else if (activeElement === 5) {
    highlight_organ = abs_config.highlight.SUPRAPUBIC_IMG_PATH;
    active_organ = abs_config.active.SUPRAPUBIC_IMG_PATH;
  } else if (activeElement === 6) {
    highlight_organ = abs_config.highlight.LLQ_IMG_PATH;
    active_organ = abs_config.active.LLQ_IMG_PATH;
  } else if (activeElement === 7) {
    highlight_organ = abs_config.highlight.LUQ_IMG_PATH;
    active_organ = abs_config.active.LUQ_IMG_PATH;
  } else if (activeElement === 8) {
    return (
      <Fragment>
        {Object.entries(abs_config.highlight).map((obj) => {
          return (
            <img
              key={obj[0]}
              className={styles["highlight"]}
              src={obj[1]}
              alt="highlight-img"
            />
          );
        })}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <img
        className={styles["highlight"]}
        src={active_organ}
        alt="active-img"
      />
      <img
        className={styles["highlight"]}
        src={highlight_organ}
        alt="highlight-img"
      />
    </Fragment>
  );
};

const AbsPage = () => {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState(0);
  // console.log(activeElement);

  const pageHandler = () => {
    navigate(`/FingerPage`);
  };

  return (
    <div className={styles.root}>
      <QuestionPane
        title="ปวดท้องที่บริเวณใดมากที่สุด?"
        image={abs_config.DEFAULT_ABS_IMG_PATH}
      >
        <div className={styles["button-div"]}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
            return (
              <button
                key={num}
                className={styles[`button-organ-${num}`]}
                onClick={() => setActiveElement(num)}
              />
            );
          })}
        </div>
        {activeElement !== 0 && organSelected(activeElement)}
      </QuestionPane>
      <button className="main-button" onClick={pageHandler}>
        ต่อไป
      </button>
    </div>
  );
};

export default AbsPage;
