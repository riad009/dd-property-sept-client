import { Checkbox, Radio } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../utils/schemaValidator";

const FormRadio = ({ name, value, label, validation, options }) => {
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
        render={({ field: { value, onChange } }) => (
          //   <Checkbox.Group
          //     className="md:grid grid-cols-4 gap-5"
          //     {...field}
          //     options={options}
          //     checked={value ? value : field.value}
          //   >
          //     {label}
          //   </Checkbox.Group>

          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
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

export default FormRadio;
