import { useState, Button} from 'react';
import "./Login_2.css"


function Login_2() {
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
      <label className='color_white'>Phone number เบอร์โทร:
      <br/><input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/><label className='color_white'>Password รหัสผ่าน:
        <br/><input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <div className="RegisterBanner-con">
                <a href="#" className="Forget-password-btn color_grey">Forgot password?<br/>ลืมรหัสผ่าน?</a>
            </div> 
        <div className='confirm' ><button className='color_red' onClick={handleClick}>Confirm<br/>ยืนยัน</button></div>
    </form>
      </div>
    )
}

export default Login_2
