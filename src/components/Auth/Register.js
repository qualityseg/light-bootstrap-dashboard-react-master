import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    axios
      .post('129.148.55.118/register', { email, password })
      .then((response) => {
        console.log(response.data);
        history.push('/login'); // Redirecionar para a página de login após o registro bem-sucedido
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
