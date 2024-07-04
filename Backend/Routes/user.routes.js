import { Router } from "express";
import { signup } from "../Controllers/UserController.js";

const router = Router();


router.post('/signup', signup);
router.post('/login');
router.post('logout');

export default router;