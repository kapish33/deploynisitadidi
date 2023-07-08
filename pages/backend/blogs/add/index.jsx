import React, { useState } from 'react';
import { formMenuData } from '../../../../utils/form/menuData';
import DropdownMenu from '../../../../src/components/form/PageSelectorDropdown';
import FancyInputBox from '../../../../src/components/form/FancyInput';

const backend = () => {
  // const data = formMenuData;
  const [formData, setFormData] = useState({
    route: '',
    title: '',
    paragraph: '',
  });

  const pagesAndSubPages = (menu, subMenu) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      route: menu + '/' + subMenu,
    }));
  };

  console.log('formData', formData);
  return (
    <div>
      {/* DropdownMenu is not needed in Update as it already had route  */}
      <DropdownMenu
        willSendYouBackTheSElectedMenuAndSubMenu={pagesAndSubPages}
      />
      <br />
      <br />
      {/* this is taking some input */}
      <FancyInputBox
        selector={'title'}
        placeHolder='Title'
        inputType='text'
        initialValue={formData?.title}
        formData={formData}
        formUpdater={setFormData}
      />

      <FancyInputBox
        selector={'paragraph'}
        placeHolder='Enter meta description...'
        inputType='text'
        initialValue={formData?.paragraph}
        formData={formData}
        formUpdater={setFormData}
        textArea
      />

      {/* IsHeroSection */}
      {/* Paragraph's */}
      {/* is Cources Array */}
    </div>
  );
};

export default backend;
