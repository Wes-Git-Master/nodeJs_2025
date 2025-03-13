import express from 'express';
import * as mongoose from "mongoose";
import {config} from "./configs/config";
import {apiRouter} from "./routers/api.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", apiRouter)

const dbConnection = async (): Promise<void> => {
    let dbCon = false

    while (!dbCon) {
        try {
            console.log('Connecting to db ...');
            await mongoose.connect(config.MONGODB_URI)
            dbCon = true;
            console.log('Database available !!!');

        } catch (e) {
            console.log('Database unavailable, wait 3 seconds!');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
}

const start = async (): Promise<void> => {
    try {
        await dbConnection();
        app.listen(config.PORT, () => {
            console.log(`Server started on port ${config.PORT}`);
        })
    } catch (e) {

    }
}

start()