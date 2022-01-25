import styles from "./QuestionPane.module.css";
const QuestionPane = (props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles["header"]}>{props.title}</h2>
      <div className={styles["image-pane"]}>
        <img
          className={styles["main-img"]}
          src={props.image}
          alt="img"
        />
        {props.children}
      </div>
    </div>
  );
};

export default QuestionPane;
