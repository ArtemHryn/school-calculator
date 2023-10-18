import styles from "./MatrixGraph.module.scss";
import MatrixImg from "./MatrixImg";

const MatrixGraph = () => {
  return (
    <div className={styles.matrix_box}>
      <MatrixImg />
    </div>
  );
};

export default MatrixGraph;
