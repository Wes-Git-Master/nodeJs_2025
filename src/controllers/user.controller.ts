import {Request, Response} from "express";
import {userService} from "../services/user.service";
import {IUserDTO} from "../interfaces/user.interface";
import {statusCodesEnum} from "../enums/status-codes.enum";

class UserController {

    public async getAll(req: Request, res: Response) {
        const data = await userService.getAll();
        res.status(statusCodesEnum.OK).json(data)
    }

    public async create(req: Request, res: Response) {
        const user = req.body as IUserDTO;
        const data = await userService.create(user);
        res.status(statusCodesEnum.CREATED).json(data)
    }

    public async getById(req: Request, res: Response) {
        const {id} = req.params;
        const data = await userService.getById(id);
        res.status(statusCodesEnum.OK).json(data)
    }

    public async updateById(req: Request, res: Response) {
        const {id} = req.params;
        const user = req.body as IUserDTO;
        const data = await userService.updateById(id,user);
        res.status(statusCodesEnum.OK).json(data)
    }

    public async deleteById(req: Request, res: Response) {
        const {id} = req.params;
        await userService.deleteById(id)
        res.status(statusCodesEnum.NO_CONTENT).end()
    }

}

export const userController = new UserController();