import { config as dotenv } from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';

dotenv();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'));
