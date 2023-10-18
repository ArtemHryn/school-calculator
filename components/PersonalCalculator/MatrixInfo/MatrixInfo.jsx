import MatrixGraph from "./MatrixGraph/MatrixGraph";
import styles from "./MatrixInfo.module.scss";

const MatrixInfo = () => {
  return (
    <div className={styles.matrix_wrapper}>
      <MatrixGraph />
    </div>
  );
};

export default MatrixInfo;
