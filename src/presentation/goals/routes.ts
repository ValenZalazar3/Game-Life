import { Router } from "express";
import { GoalsControllers } from "./controllers";
import { GoalDatasourceImpl } from "../../infrastructure/datasource/goal.datasource.impl";
import { GoalRepositoryImpl } from "../../infrastructure/repositories/goal.repository.impl";




export class GoalRouter {
    static get routes(): Router {
        const router = Router()


        const datasource = new GoalDatasourceImpl(); // Aca es donde esta la clave, para que si quiero cambier de base de datos, la cambio y listo.
        const goalRepository = new GoalRepositoryImpl(datasource)

        const goalController = new GoalsControllers(goalRepository)

        router.get('/', goalController.getGoals)
        router.post('/', goalController.createGoal)


        return router

    }


}