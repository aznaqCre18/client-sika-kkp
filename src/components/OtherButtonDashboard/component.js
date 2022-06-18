import React from 'react'
import { BigRightIcon } from '../../configs/icons'

function OtherButtonDashboard({content}) {
  return (
    <React.Fragment>
        {
            content.map((data, idx) => {
                return (
                    <div key={idx} className={`other-btn-container ${data.type ? data.type : "info"}`}>
                        <div className="content">
                            <img className="icon-btn" src={data.icon} alt="icon-btn" />
                            <div className="wording">
                                <p className="title">{data.title}</p>
                                <p className="description">{data.description}</p>
                            </div>
                        </div>
                        <img src={BigRightIcon} alt="icon-next" />
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default OtherButtonDashboard