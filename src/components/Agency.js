import { render } from '@testing-library/react'
import React from 'react'
import "./Agency.css"

class Agency extends React.Component {
    constructor(props) {
      super(props);
    }

render () {
    return (
        <div className="AgencyBanner-con">
            <button className="Agency-btn color_red">Agency<br/>หน่วยงาน</button>
        </div>
    )
}
}

export default Agency
