import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../utils/schemaValidator";

const FormCheckbox = ({ name, value, label, validation, options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? <div>{label}</div> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox.Group
            className="md:grid grid-cols-4 gap-5"
            {...field}
            options={options}
            checked={value ? value : field.value}
          >
            {label}
          </Checkbox.Group>
        )}
      />
      <small
        style={{
          color: "red",
        }}
      >
        {errorMessage}
      </small>
    </>
  );
};

export default FormCheckbox;
