import './assite/login.css'
import {useHistory} from 'react-router-use-history'

import  '../App';
import React from 'react';

    

function Login(){
	const history = useHistory();

	const handleButtonClick = () => {
		alert('msg');
	  history.push('/home');
	};
  return(
    <>
	
    <div className='body'>
       <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" /  >

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button onClick={handleButtonClick}>Log In</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Info</label>
					
				</form>
			</div>
			
	</div>
  </div>
    </>
  );
}

export default Login ;
