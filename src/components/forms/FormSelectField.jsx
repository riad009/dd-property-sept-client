import { Input, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormSelectField = ({
  name,
  options,
  size,
  value,
  placeholder,
  label,
  defaultValue,
  customOnChange,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            showSearch
            onChange={customOnChange ? customOnChange : onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
