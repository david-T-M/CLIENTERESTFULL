const express = require('express');
const app = express();
const morgan = require('morgan');


// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json', 2);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('img'));

var body_parser = require('body-parser');
//primer WS GET
/*app.get('/',(req,res)=>{
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
});
*/
// ROUTES
app.use(require('./routes/index'));
app.post('/mostrar',function (req,res){
    var n = req.body.nombre;
    var ap = req.body.ap;
    var d = req.body.dir;
    var t = req.body.tel;
    res.send("<html><head><style> .button {        background-color: #4CAF50;        border: none;        color: white;        padding: 15px 32px;        text-align: center;        text-decoration: none;        display: inline-block;        font-size: 16px;      } body {      background-color: lightblue; }  .container { height: 200px;        position: relative;        border: 6px solid green;    top: 50%; margin: 0;        position: absolute;        top: 20%; text-align: center; margin-left: auto;        margin-right: auto;        width: 40%; float: right;}  </style></head><body><div class='container'>Bienvenido: "+n +" "+ap+"<br><br>Tus dirección es: "+d+" y tu teléfono es: "+t+ " </div></body></html>")
});
app.listen(app.get('port'),()=>{
    console.log("Server listening on port 3000");
});
