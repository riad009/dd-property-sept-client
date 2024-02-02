import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormtTextarea = ({
  name,
  label,
  rows,
  value,
  height,
  placeholder,
  required,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            required={required || false}
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            autoSize={{
              minRows: 10,
              maxRows: 5,
            }}
          />
        )}
      />
    </>
  );
};

export default FormtTextarea;
