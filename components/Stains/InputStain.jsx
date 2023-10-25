import styles from "./Stains.module.scss";

const InputStain = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 205 464"
      fill="none"
      className={styles.input_stain}
    >
      <g filter="url(#filter0_f_52_4460)">
        <path
          d="M644.552 108.785C671.865 183.49 523.889 352.66 393.885 401.443C263.881 450.227 71.0346 418.223 43.7216 343.518C16.4086 268.812 118.292 116.619 248.296 67.8354C378.3 19.0521 617.239 34.0786 644.552 108.785Z"
          fill="#0B570E"
          fillOpacity="0.1"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_52_4460"
          x="0.263672"
          y="0.628784"
          width="686.579"
          height="463.087"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="19.5"
            result="effect1_foregroundBlur_52_4460"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default InputStain;
