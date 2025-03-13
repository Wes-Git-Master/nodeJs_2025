import {Request, Response, Router} from 'express';
import {userService} from "../services/user.service";
import {IUserDTO} from "../interfaces/user.interface";

const router = Router();

router.get("/", async (req:Request, res:Response) => {
    const data = await userService.getAll();
    res.json(data)
})

router.post("/", async (req:Request, res:Response) => {
    const user = req.body as IUserDTO;
    const data = await userService.create(user);
    res.json(data)
})

router.get("/:id", async (req:Request, res:Response) => {
    const {id} = req.params;
    const data = await userService.getById(id);
    res.json(data)
})

export const userRouter = router;