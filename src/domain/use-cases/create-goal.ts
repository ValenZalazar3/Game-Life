import { CreateGoalDto } from "../dtos";
import { GoalEntity } from "../entities/goal.entity";
import { GoalRepository } from "../repositories/goal.repository";



interface CreateGoalUseCase {
    execute(dto: CreateGoalDto): Promise<GoalEntity>
}

export class CreateGoal implements CreateGoalUseCase {

    constructor(
        private readonly repository: GoalRepository
    ) { }

    execute(dto: CreateGoalDto): Promise<GoalEntity> {
        return this.repository.create(dto)
    }
}
