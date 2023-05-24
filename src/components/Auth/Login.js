import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    axios
      .post('/api/login', { email, password }) // Rota para o servidor Express no Next.js
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          // Armazene o token em algum lugar seguro (por exemplo, localStorage) para uso posterior
          localStorage.setItem('token', token);
          router.push('/dashboard'); // Redirecionar para a página principal (dashboard)
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
          <Link href="/register">Registro de usuário</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
