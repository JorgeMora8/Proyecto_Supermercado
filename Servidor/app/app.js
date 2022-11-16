import express from "express"; 

//=> Routers
import { principalRouter } from "../../router/Principal.js";

const app = express()





//=> Instalacion de Routers
app.use("/principal", principalRouter)

export {
    app
}