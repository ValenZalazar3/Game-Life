import { CreateGoalDto } from "../dtos";
import { GoalEntity } from "../entities/goal.entity";





export abstract class GoalDatasource {
    abstract create(createGoalDto: CreateGoalDto): Promise<GoalEntity>

    abstract getAllGoals(): Promise<GoalEntity[]>
}