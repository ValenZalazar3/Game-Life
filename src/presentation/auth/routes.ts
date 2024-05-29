import { Router } from "express";
import { AuthControllers } from "./controllers";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository,impl";
import { UserDatasourceImpl } from "../../infrastructure/datasource/user.datasource.impl";






export class AuthRoutes {

    static get routes(): Router {

        const router = Router();
        const userDatasource = new UserDatasourceImpl()
        const userRepository = new UserRepositoryImpl(userDatasource)

        const controller = new AuthControllers(userRepository)

        router.post('/register', controller.registerUser)

        return router

    }
}



