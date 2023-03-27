/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { deletePerson, getPerson, getPeople, postPerson, updatePerson, login_User } from "../controllers/user";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, getPeople);
router.get("/:idUser", getPerson);
router.get("/:email/:password", login_User);
router.post("/",logMiddleware, postPerson);
router.put("/:idUser",updatePerson);
router.delete("/:idUser",deletePerson);

export {router};
