import express from 'express'
import cors from 'cors'
import libs from 'libs'
import validation from 'validation'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/status', (_, res) => res.send({status: `hello from status libs ${libs()}`}));
app.get('/', (_, res) => res.send({status: `hello from index ${validation()}`}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));