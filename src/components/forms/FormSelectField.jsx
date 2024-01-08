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
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? <p className="text-[15px]">{label}</p> : null}
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
            disabled={disabled ? true : false}
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
