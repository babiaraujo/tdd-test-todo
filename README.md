Aplicação de Autenticação e Lista de Tarefas

Em Node.js que demonstra um sistema simples de autenticação de usuário e uma lista de tarefas (TODO list). A aplicação usa tecnologias como Express.js para o servidor, MongoDB para armazenamento de dados e Mocha/Chai para testes.

Configuração
Antes de executar a aplicação, você precisa configurar algumas coisas:

Configuração do Banco de Dados: Certifique-se de que você tenha o MongoDB instalado e em execução. Você também pode configurar as informações de conexão no arquivo .env (veja o exemplo .env.example para orientação).

Instalação de Dependências: Execute o seguinte comando para instalar as dependências necessárias:

npm install

Variáveis de Ambiente: Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como o segredo para JWT e a URL do banco de dados.
JWT_SECRET=seu_segredo_jwt
MONGODB_URI=sua_url_do_mongodb

Execução
Depois de configurar a aplicação, você pode executá-la usando o seguinte comando:

npm start

A aplicação estará acessível em http://localhost:3000.

Rotas
A aplicação possui as seguintes rotas:

POST /api/register: Registra um novo usuário.
POST /api/login: Loga um usuário existente.
POST /api/tasks: Cria uma nova tarefa.
GET /api/tasks: Lista todas as tarefas do usuário logado.
Você pode usar ferramentas como Postman ou cURL para interagir com essas rotas.

Testes
A aplicação inclui testes automatizados para garantir seu correto funcionamento. Você pode executar os testes com o seguinte comando:

npm test
