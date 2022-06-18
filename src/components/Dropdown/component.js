import React, { useState } from 'react';
import { DownIcon } from '../../configs/icons';

function Dropdown({ data, onChange, value, width = "100%", nameKey}) {

  const [isActive, setIsActive] = useState(false);

  const _handleOpenDropdown = () => {
    setIsActive(!isActive);
  }

  const _handleWhenSelectDropdown = (item) => {
    onChange(item);
    _handleOpenDropdown();
  }

  return (
    <React.Fragment>
      <div className='dropdown-wrapper' style={{width}}>
        <div className="selected-value" onClick={_handleOpenDropdown}>
          <p className="active-cat">{ value ? value : 'Pilih Level' }</p>
          <img src={DownIcon} alt="down-ic" />
        </div>
        <div className={`selection-wrapper ${isActive ? 'active' : ''}`}>
          <ul>
            {
              data.map((item, idx) => {
                console.log(item[nameKey]);
                return (
                  <li key={idx} onClick={() => _handleWhenSelectDropdown(item)}>{nameKey ? item[nameKey] : item.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dropdown;