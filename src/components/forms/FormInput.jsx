import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../utils/schemaValidator";

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  count,
  customOnChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? (
        <p className="text-[15px] pb-1">
          {label}

          {required && (
            <span className="text-red-600 text-sm"> (Required*)</span>
          )}
        </p>
      ) : null}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            size={size}
            required={required || false}
            value={value ? value : field.value}
            placeholder={placeholder}
            onKeyDown={customOnChange && customOnChange}
            autoComplete="off"
            // className="py-3"
          />
        )}
      />
      {errorMessage && (
        <small
          style={{
            color: "red",
          }}
        >
          {errorMessage}
        </small>
      )}
    </>
  );
};

export default FormInput;
