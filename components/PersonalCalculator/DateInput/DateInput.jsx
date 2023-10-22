"use client";
import { useForm, Controller } from "react-hook-form";
import TextMaskInput from "react-text-mask";

import styles from "./DateInput.module.scss";

const DateInput = ({ setDate, setName, setShowMatrix }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    setName(data.name);
    const [day, month, year] = data.date.split(".");
    setDate({ day, month, year });
    setShowMatrix(true);
    document.activeElement.blur();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onFormSubmit)}
      id="dateForm"
    >
      <label className={styles.label}>
        <span>Ваше ім’я</span>
        <input
          type="text"
          className={styles.input}
          maxLength={"30"}
          {...register("name")}
        />
      </label>
      <Controller
        name="date"
        control={control}
        rules={{
          required: { value: true, message: "Введіть дату народження" },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: "Введіть дату в форматі дд.мм.рррр",
          },
        }}
        render={({ field }) => (
          <label className={styles.label}>
            <span>Дата народження</span>
            <TextMaskInput
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
              type="text"
              placeholder="ДД.ММ.РР"
              className={styles.input}
            />{" "}
            {errors.date && (
              <p className={styles.error}>{errors.date.message}</p>
            )}
          </label>
        )}
      />

      <button className={styles.submit_btn}>Розрахувати матрицю</button>
    </form>
  );
};

export default DateInput;
