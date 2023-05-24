import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          // Armazene o token em algum lugar seguro (por exemplo, localStorage) para uso posterior
          localStorage.setItem('token', token);
          history.push('/dashboard'); // Redirecionar para a página principal (dashboard)
        } else {
          console.log('Credenciais inválidas');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
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
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Não tem uma conta?{' '}
          <Link to="/register">Registro de usuário</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
