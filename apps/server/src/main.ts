import express from 'express'
import cors from 'cors'
import libs from 'libs'
import validation from 'validation'
import routes from './routes';
import { generalError } from './errorMiddleware';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/status', (_, res) => res.send({status: `hello from status libs ${libs()}`}));
app.get('/', (_, res) => res.send({status: `hello from index  ${validation()}`}));

app.use(routes)
app.use(generalError)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));