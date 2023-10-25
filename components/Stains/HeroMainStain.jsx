import styles from "./Stains.module.scss";

const HeroMainStain = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 572"
      fill="none"
      className={styles.main_stain}
    >
      <g filter="url(#filter0_f_268_3060)">
        <path
          d="M733.792 211.459C706.223 314.181 479.475 399.287 345.697 362.437C211.919 325.586 81.8708 154.239 109.44 51.517C137.009 -51.205 316.535 -149.735 450.313 -112.884C584.091 -76.0335 761.361 108.737 733.792 211.459Z"
          fill="#F88112"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_268_3060"
          x="-94.2866"
          y="-320.776"
          width="1030.94"
          height="891.964"
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
            stdDeviation="100"
            result="effect1_foregroundBlur_268_3060"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroMainStain;
