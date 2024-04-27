import express from 'express';
import { createUser,GetUser,UpdateUser,DeleteUser,getUserById} from '../controller/UserController.js'

const router = express.Router();

router.post('/create', createUser); 
router.get('/get',GetUser)
router.put('/update/:id', UpdateUser);
router.delete('/delete/:id',DeleteUser)
router.get('/get/:id', getUserById);


export default router;
