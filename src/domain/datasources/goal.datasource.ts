import { CreateGoalDto, UpdateGoalDto } from "../dtos";

import { GoalEntity } from "../entities/goal.entity";





export abstract class GoalDatasource {
    abstract create(createGoalDto: CreateGoalDto): Promise<GoalEntity>

    abstract getAllGoals(): Promise<GoalEntity[]>

    abstract findGoalById(id: string): Promise<GoalEntity>

    abstract updateGoal(id: string, updateGoalDto: UpdateGoalDto): Promise<GoalEntity>

    abstract deleteGoal(id: string): Promise<GoalEntity>
}