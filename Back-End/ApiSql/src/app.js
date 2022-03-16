import express from 'express';
import config from './config';
import estudianteRoutes from './routes/estudiante.route'
let cors = require('cors');
const app = express();


// use it before all route definitions


//setting
app.set('port',config.port);

//middelwares
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors());
console.log( `http://localhost:${app.get('port')}/estudiante`);

app.use(estudianteRoutes);

export default app;