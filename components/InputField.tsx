'use client';

import { useState } from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (value: string | number) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;