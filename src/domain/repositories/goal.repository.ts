import { CreateGoalDto } from "../dtos";
import { GoalEntity } from "../entities/goal.entity";





export abstract class GoalRepository {


    abstract getAllGoals(): Promise<GoalEntity[]>
    abstract create(createGoalDto: CreateGoalDto): Promise<GoalEntity>
}