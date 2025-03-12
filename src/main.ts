import express, {Request,Response} from 'express';
import * as mongoose from "mongoose";
import {userService} from "./services/user.service";
import {IUserDTO} from "./interfaces/user.interface";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req:Request, res:Response) => {
    const data = await userService.getAll();
    res.json(data)
})

app.post("/users", async (req:Request, res:Response) => {
    const user = req.body as IUserDTO;
    const data = await userService.create(user);
    res.json(data)
})

app.getById("/users/:id", async (req:Request, res:Response) => {
    const {id} = req.params;
    const data = await userService.create(user);
    res.json(data)
})



const dbConnection = async (): Promise<void> => {
    let dbCon = false

    while (!dbCon){
        try {
            'Connecting to db';
            await mongoose.connect('mongodb+srv://edvinfaas:<@0508Ves@>@cluster0.ji8p7.mongodb.net/nodeJs-express-db-2025')
            dbCon = true;
            console.log('Database available !!!');

        } catch (e) {
            console.log('Database unavailable, wait 3 seconds!');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
}

const start = async  (): Promise<void> => {
    try {
        await dbConnection();
        app.listen(2222, () => {
            console.log('Server started on port 2222');
        })
    }
    catch (e) {

    }
}

start()