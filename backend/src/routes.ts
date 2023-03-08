import express from 'express';
import UserController from "../controller/userController";
import ClienteController from "../controller/clienteController";
import ClienteAnualController from "../controller/clienteAnualController";

const routers = express.Router();

routers.get("/", (req, res) => {
    return res.json({
        name: "avaliacao :)",
        message: "",
        version: "1.0.0",
    })
});

//USUARIOS
routers.post("/users", UserController.store);
routers.get("/users", UserController.getAll);
routers.put("/users/:id", UserController.put)
routers.delete("/users/:id", UserController.delete);

routers.get("/clientes", ClienteController.getAll);
routers.get("/clientes_anuais", ClienteAnualController.getAll);
routers.get("/clientes_anuais2023", ClienteAnualController.get2023);

export default routers;