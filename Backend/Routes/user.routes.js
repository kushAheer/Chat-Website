import { Router } from "express";
import { register , login  , logout} from "../Controllers/UserController.js";

const router = Router();


router.post('/signup', register);
router.post('/login',login);
router.post('/logout',logout);

export default router;