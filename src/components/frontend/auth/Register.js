import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list:[],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }
    // axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post('/api/register', data).then((res) => {
      if(res.data.status === 200) 
      {
        localStorage.setItem('auth_token',res.data.token);
        localStorage.setItem('auth_name',res.data.username);
        swal("Success",res.data.message,"success");
        navigate('/');
      }
      else
      {
        setRegister({...registerInput,error_list: res.data.validation_errors});
      }
    });
    // }); 
  }

  //   axios.post('/sanctum/csrf-cookie',data)
  //   .then(res=>console.log(res))
  //   .catch(error=>console.log(error))
  // }

  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <h4>Registration</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={registerSubmit}>
                  <div className='form-group mb-3'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                      type='text'
                      name='name'
                      onChange={handleInput}
                      value={registerInput.name}
                      className='form-control'
                    />
                  <span>{registerInput.error_list.name}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      name='email'
                      onChange={handleInput}
                      value={registerInput.email}
                      className='form-control'
                    />
                    <span>{registerInput.error_list.email}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      name='password'
                      onChange={handleInput}
                      value={registerInput.password}
                      className='form-control'
                    />
                    <span>{registerInput.error_list.password}</span>
                  </div>
                  <div className='form-group mb-3'>
                    <button type='submit' className='btn btn-primary'>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
