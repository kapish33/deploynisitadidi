import React, { useState } from 'react';

const FancyInputBox = ({
  placeHolder,
  inputType,
  initialValue,
  selector,
  formData,
  formUpdater,
  textArea,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    formUpdater({ ...formData, [selector]: value });
  };

  return (
    <div className='mx-auto max-w-md py-2'>
      <div className='relative'>
        {!textArea && (
          <input
            type={inputType}
            onChange={handleInputChange}
            placeholder={placeHolder}
            value={inputValue}
            className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
          />
        )}

        {textArea && (
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeHolder}
            rows={4}
            className='resize-vertical w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
          />
        )}
        <div className='absolute top-0 right-0 flex h-full items-center pr-3'>
          <span className='cursor-pointer text-gray-400 hover:text-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M10 3a7 7 0 100 14 7 7 0 000-14zM4.172 9H15.83a5 5 0 11-11.657 0zM10 12a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FancyInputBox;
