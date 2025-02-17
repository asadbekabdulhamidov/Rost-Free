function Input({ type, placeholder, name }) {
  return (
    <input
      className="border p-5 outline-none placeholder:font-semibold"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
