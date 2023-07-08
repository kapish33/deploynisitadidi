import React, { useState } from 'react';
import { formMenuData } from '../../../../utils/form/menuData';

const DropdownMenu = ({ willSendYouBackTheSElectedMenuAndSubMenu }) => {
  const menuData = formMenuData;
  const [selectedOption, setSelectedOption] = useState({
    menu: '',
    subMenu: '',
  });

  const handleMenuChange = (e) => {
    const selectedMenu = e.target.value;
    setSelectedOption((prevOption) => ({
      menu: selectedMenu,
      subMenu: '',
    }));
  };

  const handleSubMenuChange = (e) => {
    const selectedSubMenu = e.target.value;
    setSelectedOption((prevOption) => ({
      ...prevOption,
      subMenu: selectedSubMenu,
    }));
    willSendYouBackTheSElectedMenuAndSubMenu(
      formMenuData[selectedOption.menu].value,
      selectedSubMenu
    );
  };

  return (
    <div className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label htmlFor='menu' className='block mb-2 font-bold'>
          Main Menu:
        </label>
        <select
          id='menu'
          name='menu'
          value={selectedOption.menu}
          onChange={handleMenuChange}
          className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'>
          <option value=''>Select a menu</option>
          {Object.keys(menuData).map((menu) => (
            <option key={menu} value={menu}>
              {menu}
            </option>
          ))}
        </select>
      </div>
      {selectedOption.menu && (
        <div className='mb-4'>
          <label htmlFor='subMenu' className='block mb-2 font-bold'>
            Sub Menu:
          </label>
          <select
            id='subMenu'
            name='subMenu'
            value={selectedOption.subMenu}
            onChange={handleSubMenuChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'>
            <option value=''>Select a sub menu</option>
            {Object.keys(menuData[selectedOption.menu].subMenu).map(
              (subMenu) => (
                <option
                  key={subMenu}
                  value={menuData[selectedOption.menu].subMenu[subMenu]}>
                  {subMenu}
                </option>
              )
            )}
          </select>
        </div>
      )}
      {/* {selectedOption.subMenu && (
        <div>
          <p>Selected Menu: {selectedOption.menu}</p>
          <p>Selected Sub Menu: {selectedOption.subMenu}</p>
        </div>
      )} */}
    </div>
  );
};

export default DropdownMenu;
