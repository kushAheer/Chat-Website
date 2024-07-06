import { Router } from 'express';
import { sendMessage , getMessages} from '../Controllers/MessageController.js';
import Authentication from '../Middleware/Authentication.js';

const router = Router();

router.post('/send/:id',Authentication,sendMessage);//Authentication middleware is used to protect the route
router.get("/:id",Authentication,getMessages);


export default router;