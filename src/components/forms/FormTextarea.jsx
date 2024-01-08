import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormtTextarea = ({ name, label, rows, value, height, placeholder }) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormtTextarea;
