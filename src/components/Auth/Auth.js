import jwt from 'jsonwebtoken';


// Função para gerar um token JWT
export const generateToken = (payload) => {
  // Aqui você pode definir o segredo para assinar o token
  const secret = 'seu_secreto_aqui';

  // Gere o token com base no payload e segredo
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });

  return token;
};

// Função para verificar e decodificar um token JWT
export const verifyToken = (token) => {
  // Aqui você pode definir o segredo para verificar o token
  const secret = 'seu_secreto_aqui';

  try {
    // Verifique e decodifique o token com base no segredo
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    // Caso ocorra algum erro na verificação do token
    console.error('Erro ao verificar o token:', error);
    return null;
  }
};

// Função para verificar se um usuário está autenticado
export const isAuthenticated = () => {
  // Verifique se o token está presente no armazenamento local (localStorage)
  const token = localStorage.getItem('token');

  if (token) {
    // Verifique e decodifique o token
    const decoded = verifyToken(token);

    if (decoded) {
      // O token é válido e o usuário está autenticado
      return true;
    }
  }

  // Caso contrário, o usuário não está autenticado
  return false;
};
