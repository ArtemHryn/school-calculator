import MatrixImg from "./MatrixImg";

import styles from "./MatrixInfo.module.scss";
import MatrixElements from "./MatrixElements/MatrixElements";

const MatrixInfo = ({ matrix }) => {
  if (!matrix) return null;
  return (
    <div className={styles.matrix_box}>
      <MatrixImg />
      <MatrixElements matrix={matrix} />
    </div>
  );
};

export default MatrixInfo;
