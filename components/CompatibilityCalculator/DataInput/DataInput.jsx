import { Controller, useFieldArray, useForm } from "react-hook-form";
import TextMaskInput from "react-text-mask";

import styles from "./DataInput.module.scss";

const initialState = { date: "" };

const DataInput = ({ setDate, setShowMatrix }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      info: [initialState, initialState],
    },
  });

  const { fields } = useFieldArray({
    name: "info",
    control,
  });

  const onFormSubmit = (data) => {
    const matrix = [];
    data.info.forEach((el) => {
      const [day, month, year] = el.date.split(".");
      matrix.push({ day, month, year });
    });
    setDate(matrix);
    setShowMatrix(true);

    document.activeElement.blur();
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form} id="compatibilityForm">
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`info.${index}.date`}
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
              <span>
                {index === 0 ? "Дата народження" : "Дата народження партнера"}
              </span>
              <TextMaskInput
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                mask={[
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                type="text"
                placeholder="ДД.ММ.РР"
                className={styles.input}
              />{" "}
              {errors.info && errors.info[index] && errors.info[index].date && (
                <p className={styles.error}>
                  {errors.info[index].date.message}
                </p>
              )}
            </label>
          )}
        />
      ))}
      <button className={styles.submit_btn}>Розрахувати матрицю</button>
    </form>
  );
};

export default DataInput;
