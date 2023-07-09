import { useState } from 'react';
import FancyInputBox from '../src/components/form/FancyInput';
import FancySubmitButton from '../src/components/form/FancyButton';
import { whatsAppURL } from '../utils/whatsappHelper';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    course: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalText = `
    Hi Nishita,
    I wanted to know more about ${formData.course}.

    ${formData.subject}

    ${formData.message}
    `;

    const encodedText = encodeURIComponent(finalText);
    const url = whatsAppURL(encodedText);
    window.open(url);
  };

  return (
    <div className='mx-auto max-w-md py-2'>
      <form onSubmit={handleSubmit}>
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
          <option value='sudarshan Kriya'>sudarshan Kriya</option>
          <option value='Sahaj Samadhi'>Sahaj Samadhi</option>
          <option value='IIM Program'>IIM Program</option>
        </select>
        <br />
        <hr />
        {/* dropdown ends*/}
        <FancyInputBox
          selector='subject'
          placeHolder='Subject'
          inputType='text'
          initialValue={formData.subject}
          formData={formData}
          formUpdater={setFormData}
        />

        <FancyInputBox
          selector='message'
          placeHolder='Message You Wanted to convey...'
          inputType='text'
          initialValue={formData.message}
          formData={formData}
          formUpdater={setFormData}
          textArea
        />

        <FancySubmitButton text='Send Message' type='submit' />
      </form>
    </div>
  );
};

export default Contact;
