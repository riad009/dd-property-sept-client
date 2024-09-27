const ProfileInput = ({ label, value, onChange, name, required, disabled }) => {
  return (
    <div>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        type='text'
        id={label}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className='w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500'
      />
    </div>
  );
};

export default ProfileInput;
