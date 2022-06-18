import React from 'react';
import Button from '../Button/component';
import Dropdown from '../Dropdown';
import SearchField from '../SearchField';

function HeaderMainDataView({ button, onClick, isSearchField = true }) {
  return (
    <div className="tools">
      <div className="search-field">
        {isSearchField && <SearchField placeholder="Cari berdasarkan nama..." />}
      </div>
      <div className="btn-group-tools">
        {
          button && button.map((data, idx) => (
            <React.Fragment>
              <Button label={data.label} key={idx} onClick={() => onClick(data.value)} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default HeaderMainDataView;