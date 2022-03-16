import app from './app';



app.listen(app.get('port'));


console.log('Server listo corriendo en el puerto : '+app.get('port'));