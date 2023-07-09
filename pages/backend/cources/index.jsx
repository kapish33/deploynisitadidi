import React, { useState } from 'react';
import FancyInputBox from '../../../src/components/form/FancyInput';
import FancySubmitButton from '../../../src/components/form/FancyButton';

const Index = () => {
  const [formData, setFormData] = useState({
    title: '',
    paragraph: '',
    course: '',
    startingDate: new Date(),
    endDate: null,
    cost: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date.toISOString().slice(0, 16),
    });
  };

  console.log('formData', formData);

  return (
    <div className='mx-auto max-w-md py-2'>
      {/* dropdown start*/}
      <label htmlFor='course' className='block text-gray-700'>
        Select a course:
      </label>
      <select
        id='course'
        name='course'
        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500'
        value={formData.course}
        onChange={handleInputChange}>
        <option value=''>Select</option>
        <option value='course1'>Course 1</option>
        <option value='course2'>Course 2</option>
        <option value='course3'>Course 3</option>
      </select>
      <br />
      <hr />
      {/* dropdown ends*/}

      {/* input Starts */}
      <FancyInputBox
        selector='title'
        placeHolder='Title'
        inputType='text'
        initialValue={formData.title}
        formData={formData}
        formUpdater={setFormData}
      />
      {/* Title input ENds */}

      <input
        type='datetime-local'
        name='startingDate'
        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500'
        value={formData.startingDate || ''}
        onChange={(e) =>
          handleDateChange(new Date(e.target.value), 'startingDate')
        }
      />

      <input
        type='datetime-local'
        name='endDate'
        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500'
        value={formData.endDate || ''}
        onChange={(e) => handleDateChange(new Date(e.target.value), 'endDate')}
      />

      {/* Price Starts */}
      <FancyInputBox
        selector='cost'
        placeHolder='cost'
        inputType='number'
        initialValue={formData.cost}
        formData={formData}
        formUpdater={setFormData}
      />
      {/* Price Ends */}

      <FancySubmitButton text={'Add This Course'} onClick={() => {}} />
    </div>
  );
};

export default Index;
