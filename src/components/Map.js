import React from 'react'
import "./Map.css"

function Map() {
    return (
        <div className='body1'>
           <nav >
                <img className="img" src="/LogoRecap (2).png" alt="logo"/>
                <div className=' Header'>Informer<br/></div>
                <div className='Header_2'>ผู้แจ้ง</div>
           </nav>
            <div>
                <img className='Mapp' src="/Mapp.png" alt="logo"/>
                <button className='Report color_black'>Report An Accident<br/>แจ้งอุบัติเหตุ</button>
                <br/><button className='Agency color_grey'>Nearest Agency<br/>หน่วยงานที่ใกล้ที่สุด</button>
                <br/><button className='Back color_white'>Back<br/>ย้อนกลับ</button>
                </div>    
        </div>
    )
}

export default Map