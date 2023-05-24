import jwtDecode from 'jwt-decode';

// Função para decodificar um token JWT
export const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};

// Função para verificar se um usuário está autenticado
export const isAuthenticated = () => {
  // Verifique se o token está presente no armazenamento local (localStorage)
  const token = localStorage.getItem('token');

  if (token) {
    // Decodifique o token
    const decoded = decodeToken(token);

    if (decoded) {
      // O token é válido e o usuário está autenticado
      return true;
    }
  }

  // Caso contrário, o usuário não está autenticado
  return false;
};

// Função para fazer logout
export const logout = () => {
  // Remova o token do armazenamento local (localStorage)
  localStorage.removeItem('token');
};
