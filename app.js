
const { IgApiClient } = require('instagram-private-api');

// Credenciais do Instagram
const username = 'seu_nome_de_usuario';
const password = 'sua_senha';

// Instanciando cliente do instagram-private-api
const ig = new IgApiClient();

// Login com o instagram-private-api
ig.state.generateDevice(username);
ig.account.login(username, password).then(() => {
    console.log('instagram-private-api: Conectado com sucesso!');
}).catch(error => {
    console.error('instagram-private-api: Erro ao conectar:', error);
});
