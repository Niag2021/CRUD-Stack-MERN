import express from "express";
import cors from 'cors'
//importamos la conexion a la bd
import db from "./src/database/db.js"
//importamos nuestro enrutador
import blogRoutes from './src/routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try{
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
}catch(eror){
    console.log('El error de conexion es : $(error)')
}

app.listen(8001, () =>{
    console.log('Server UP running in http://localhost:8001/')
})