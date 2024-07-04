import { Router } from "express";
import { register } from "../Controllers/UserController.js";

const router = Router();


router.post('/signup', register);
router.post('/login');
router.post('logout');

export default router;