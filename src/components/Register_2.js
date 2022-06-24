import {useState} from 'react';
import "./Register_2.css"

function Register_2() {
  const [inputs, setInputs] = useState({});
  const handleClick = () => {
    console.log('hello');
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

  }

    return (
        <div className='center'>
        <form>
      <label className='color_white'>Name ชื่อ-นามสกุล:
      <br/><input 
        type="text" 
        name="NameSur" 
        value={inputs.NameSur || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><label className='color_white'>Email อีเมล:
      <br/><input 
        type="text" 
        name="Email" 
        value={inputs.Email || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><label className='color_white'>Phone Number เบอร์โทร:
      <br/><input 
        type="text" 
        name="Phone" 
        value={inputs.Phone || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><label className='color_white'>Password รหัสผ่าน:
        <br/><input 
          type="password" 
          name="Password" 
          value={inputs.Password || ""} 
          onChange={handleChange}
        />
        </label>
        <br/><label className='color_white'>Confirm Password ยืนยันรหัสผ่าน:
        <br/><input 
          type="password" 
          name="ConfirmPassword" 
          value={inputs.ConfirmPassword || ""} 
          onChange={handleChange}
        />
        </label>
        <div className='confirm' ><button className='color_red' onClick={handleClick}>Confirm<br/>ตกลง</button></div>
    </form>
      </div>
    )
}

export default Register_2
