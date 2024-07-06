import { Router } from "express";
import Authentication from '../Middleware/Authentication.js';
import { getUsers } from "../Controllers/UserController.js";

const router = Router();


router.get('/',Authentication , getUsers);



export default router;