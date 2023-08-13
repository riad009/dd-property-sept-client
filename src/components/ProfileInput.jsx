const ProfileInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default ProfileInput;
