import MatrixElements from "./MatrixElements/MatrixElements";
import styles from "./MatrixGraph.module.scss";
import MatrixImg from "./MatrixImg";

const MatrixGraph = ({ matrix }) => {
  return (
    <div className={styles.matrix_box}>
      <MatrixImg />
      <MatrixElements matrix={matrix} />
    </div>
  );
};

export default MatrixGraph;
