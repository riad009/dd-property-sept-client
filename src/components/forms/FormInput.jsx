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
            <span className="text-red-600 text-sm">(Required*)</span>
          )}
        </p>
      ) : null}

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              value={value ? value : field.value}
              placeholder={placeholder}
              // className="py-3"
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              value={value ? value : field.value}
              placeholder={placeholder}
              onChange={customOnChange && customOnChange}
              // className="py-3"
            />
          )
        }
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
