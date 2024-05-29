import { Router } from 'express'
import { GoalRouter } from './goals/routes'
import { AuthRoutes } from './auth/routes'



export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        router.use('/api/goal', GoalRouter.routes)
        router.use('/api/auth', AuthRoutes.routes)
        return router
    }
}