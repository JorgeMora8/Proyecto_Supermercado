import { Router } from "express";

const principalRouter = Router();


principalRouter.get("/", (req, res) => {
    res.send("Estas en la pagina principal")
})

principalRouter.get("/categorias", (req, res) => {
    res.send("Tenemos distintos tipos de categorias")
})

principalRouter.get("/carritos", (req, res) => {
    res.send("En esta pagina se mostrara todos los carritos cargardos a tu pagina")
})

export { 
    principalRouter
}