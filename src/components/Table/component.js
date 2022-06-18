import React from 'react'
import { DeleteIcon, EditIcon } from '../../configs/icons'

function Table({tableField, datasets, type, title, customIconAction, onClickAction}) {

  const renderTableDynamic = (datasets, tableField) => {
    let tdWithApi = [];
    
    for (let i = 0; i < tableField.length; i++) {
      if(tableField[i].fieldApi !== "") {
        tdWithApi.push(tableField[i])
      }
    }

    const renderDynamic = (data) => {
      return (
        tdWithApi.map((item, index) => {
          return (
            <td key={index}>{data[item.fieldApi]}</td>
          )
        })
      )
    }

    return (
      datasets.map((dataApi, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          {renderDynamic(dataApi)}
          {
            type !== 'jadwal-mengajar' && (
              <td>
                <div className="btn-action">
                  {
                    customIconAction && customIconAction.map((data, idx) => {
                      return (
                        <div className="btn-act">
                          <img src={data && data.icon} onClick={() => onClickAction(data.value, dataApi)} alt={`btn-action-${idx}`} />
                        </div>
                      )
                    })
                  }
                </div>
              </td>
            )
          }
        </tr>
      ))
    )
  }

  return (
    <div className="table-container">
      <table cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr className="row-head" >
            {
              tableField.map((data, index) => (
                <th key={index}>{data.fieldName}</th>
              ))
            }
          </tr>
          {renderTableDynamic(datasets, tableField)}
        </tbody>
      </table>
    </div>
  )
}

export default Table