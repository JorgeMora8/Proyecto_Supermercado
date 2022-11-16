import { app } from "./app/app.js";
import http from "http"


export function levantarServidor(port){
    const httpServer = http.createServer(app);
    const server = httpServer.listen(port, ()=>{
        console.log(`Servidor levantado en el puerto ${port}`)
    })

    server.on("error", (err)=>{
        console.log(`Error en el proceso de levantar el servidor ${err}`)
    })
}

levantarServidor(5000)