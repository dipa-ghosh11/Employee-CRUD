import { createUser , getUser, updateUser, deleteUser} from "../controllers/user.controllers.js";
import express from "express"

const router=express.Router();

router.post('/createuser', createUser);
router.get('/getuser', getUser);
router.put('/updateuser/:phone', updateUser);
router.delete('/deleteuser/:phone',deleteUser )


export default router;