const {Router} = require('express');
const router = Router();

//Raiz

router.get('/',(req,res)=>{
    res.send("<html><head><style> .button {        background-color: #4CAF50;        border: none;        color: white;        padding: 15px 32px;        text-align: center;        text-decoration: none;        display: inline-block;        font-size: 16px;      } body {      background-color: lightblue; background-image: url('logo.png');}  .container { height: 200px;        position: relative;        border: 6px solid green;    top: 50%; margin: 0;        position: absolute;        top: 20%; text-align: center; margin-left: auto;        margin-right: auto;        width: 40%; float: right;}  </style></head><body><div class='container'>Favor de llenar el formulario:<br><br><form action='/mostrar' method='post'>Nombre:<input type='text' name='nombre'></input><br>Apellidos:<input type='text' name='ap'></input><br>Dirección:<input type='text' name='dir'></input><br>Telefono:<input type='text' name='tel'></input><br><br><input type='submit' value='Enviar' class='button'></input></form></div></body></html>");
    /*res.json(
        {
            "Title": "Hola Mundo con rutas"
        }
    );*/
})

module.exports =router;