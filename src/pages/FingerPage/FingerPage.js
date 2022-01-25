import React, { Fragment, useState } from "react";

import { finger_config } from "../../config";

import QuestionPane from "../../components/QuestionPane";
import styles from "./FingerPage.module.css";

const organSelected = (activeElement) => {
  let highlight_organ = "";
  let active_organ = "";
  if (activeElement === 1) {
    highlight_organ = finger_config.highlight.DIP_IMG_PATH;
    active_organ = finger_config.active.DIP_IMG_PATH;
  } else if (activeElement === 2) {
    highlight_organ = finger_config.highlight.PIP_IMG_PATH;
    active_organ = finger_config.active.PIP_IMG_PATH;
  } else if (activeElement === 3) {
    highlight_organ = finger_config.highlight.MCP_IMG_PATH;
    active_organ = finger_config.active.MCP_IMG_PATH;
  } else if (activeElement === 4) {
    return (
      <Fragment>
        {Object.entries(finger_config.highlight).map((obj) => {
          return (
            <img
              key={obj[0]}
              className={styles["highlight"]}
              src={obj[1]}
              alt="organ-highlight-img"
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

const FingerPage = () => {
  const [activeElement, setActiveElement] = useState(0);

  return (
    <div className={styles.root}>
      <QuestionPane
        title="จุดไหนที่คุณปวดนิ้วมากที่สุด?"
        image={finger_config.DEFAULT_FINGER_IMG_PATH}
      >
        <div className={styles["button-div"]}>
          {[1, 2, 3, 4].map((num) => {
            return (
              <Fragment key={num}>
                {num !== 4 && (
                  <Fragment>
                    <button
                      className={`${styles[`button-organ`]} ${
                        styles[`index-finger-${num}`]
                      }`}
                      onClick={() => setActiveElement(num)}
                    />
                    <button
                      className={`${styles[`button-organ`]} ${
                        styles[`middle-finger-${num}`]
                      }`}
                      onClick={() => setActiveElement(num)}
                    />
                    <button
                      className={`${styles[`button-organ`]} ${
                        styles[`ring-finger-${num}`]
                      }`}
                      onClick={() => setActiveElement(num)}
                    />
                    <button
                      className={`${styles[`button-organ`]} ${
                        styles[`little-finger-${num}`]
                      }`}
                      onClick={() => setActiveElement(num)}
                    />
                  </Fragment>
                )}
                {(num === 2 || num === 3) && (
                  <button
                    key={`${num}-thumb-finger`}
                    className={`${styles[`button-organ`]} ${
                      styles[`thumb-finger-${num}`]
                    }`}
                    onClick={() => setActiveElement(num)}
                  />
                )}
                {num === 4 && (
                  <button
                    key={`${num}-all-finger`}
                    className={styles[`button-organ-4`]}
                    onClick={() => setActiveElement(num)}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
        {activeElement !== 0 && organSelected(activeElement)}
      </QuestionPane>
      <button className="main-button">ต่อไป</button>
    </div>
  );
};

export default FingerPage;
