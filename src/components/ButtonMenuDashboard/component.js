import React from 'react'
import { ArrowRightIcon, JmlGuruIcon, JmlSiswaIcon } from '../../configs/icons'

const ButtonMenuDashboard = ({category = "-", count = 0, backgroundType, icon}) => {
  return (
    <div className={`btn-menu-dashboard-container ${backgroundType}`}>
        <img className="arrow-right" src={ArrowRightIcon} alt="arrow-right" />
        <div className="btn-content">
            <img src={icon} alt="icon-btn" />
            <div className="count-cat">
                <p className="count">{count}</p>
                <p className="cat">{category}</p>
            </div>
        </div>
    </div>
  )
}

export default ButtonMenuDashboard