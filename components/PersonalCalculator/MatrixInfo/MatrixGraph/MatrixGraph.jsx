import MatrixElements from "./MatrixElements/MatrixElements";
import styles from "./MatrixGraph.module.scss";
import MatrixImg from "./MatrixImg";
import PeriodCircle from "./PeriodCircle/PeriodCircle";

const MatrixGraph = ({ matrix, period }) => {
  if (!matrix) return null;
  return (
    <div className={styles.matrix_box}>
      <MatrixImg />
      <MatrixElements matrix={matrix} />
      <PeriodCircle period={period} />
    </div>
  );
};

export default MatrixGraph;
