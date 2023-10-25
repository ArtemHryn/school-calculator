import Circle1 from "./Circle1";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import InternalCircle from "./InternalCircle";

const MatrixElements = ({ matrix }) => {
  return (
    <>
      <Circle1 matrix={matrix} />
      <Circle2 matrix={matrix} />
      <Circle3 matrix={matrix} />
      <InternalCircle matrix={matrix} />
    </>
  );
};

export default MatrixElements;
