import { Request, Response } from "express";
import { CreateGoal, CreateGoalDto, GetGoals, GoalRepository } from "../../domain";




export class GoalsControllers {

    constructor(
        private readonly goalRepository: GoalRepository
    ) { }

    public getGoals = (req: Request, res: Response) => {
        new GetGoals(this.goalRepository)
            .execute()
            .then(todos => res.json(todos))
            .catch(error => res.status(400).json({ error }))
    }

    public createGoal = (req: Request, res: Response) => {
        const [error, createGoalDto] = CreateGoalDto.create(req.body)
        if (error) return res.status(400).json({ error });

        new CreateGoal(this.goalRepository)
            .execute(createGoalDto!)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({ error }))
    }
}