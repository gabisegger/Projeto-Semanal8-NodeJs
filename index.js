const express = require('express');

const app = express();
const port = 3000;

const db = []; //banco de dados simulado

app.use(express.json());

app.post('/create', (request, response) => {
  
    if (!Object.keys(request.body).length) {
    return response
      .status(400)
      .json({ erro: 'Envie sua dica no body da requisição' });
  }

  db.push(request.body);
  
  return response.send('Dica armazenada no banco de dados!');

});

app.get('/tips', (request, response) => {
  
    if (!db.length) {
        return response.status(400).json({
            erro: 'Não existe dicas no banco de dados. Use a rota /create para armazenar algumas dicas!',
        });
    }
  
    const dicasDev = parseInt(Math.random() * db.length);
  
    return response.send(db[dicasDev]);

});

app.listen(port, () => {

    console.log(`Server running on port: ${port}`);

});