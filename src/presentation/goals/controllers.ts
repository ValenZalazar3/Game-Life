import { Request, Response } from "express";
import { CreateGoal, CreateGoalDto, DeleteGoal, GetGoalById, GetGoals, GoalRepository, UpdateGoal, UpdateGoalDto } from "../../domain";




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

    public getGoalById = (req: Request, res: Response) => {
        const id = req.params.id;
        new GetGoalById(this.goalRepository)
            .execute(id)
            .then(goal => res.json(goal))
            .catch(error => res.status(400).json({ error }))

    }
    public updateGoal = (req: Request, res: Response) => {
        const id = req.params.id
        const [error, updateGoalDto] = UpdateGoalDto.create({ ...req.body, id })
        if (error) return res.status(400).json({ error });
        new UpdateGoal(this.goalRepository)
            .execute(id, updateGoalDto!)
            .then(goal => res.json(goal))
            .catch(error => res.status(400).json({ error }))
    }
    public deleteGoal = (req: Request, res: Response) => {
        const id = req.params.id;
        new DeleteGoal(this.goalRepository)
            .execute(id)
            .then(goal => res.json(goal))
            .catch(error => res.status(400).json({ error }))
    }



}