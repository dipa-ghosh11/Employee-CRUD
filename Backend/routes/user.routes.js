import { createUser , getUser, updateUser, deleteUser} from "../controllers/user.controllers.js";
import express from "express"

const router=express.Router();

router.post('/createuser', createUser);
router.get('/getuser', getUser);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id',deleteUser )


export default router;