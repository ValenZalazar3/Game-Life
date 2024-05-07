import { Router } from 'express'
import { GoalRouter } from './goals/routes'



export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        router.use('/api/goal', GoalRouter.routes)
        return router
    }
}