import { UpdateGoalDto } from "../dtos";
import { GoalEntity } from "../entities/goal.entity";
import { GoalRepository } from "../repositories/goal.repository";



interface UpdateGoalUseCase {
    execute(id: string, dto: UpdateGoalDto): Promise<GoalEntity>
}

export class UpdateGoal implements UpdateGoalUseCase {

    constructor(
        private readonly repository: GoalRepository
    ) { }

    execute(id: string, dto: UpdateGoalDto): Promise<GoalEntity> {
        return this.repository.updateGoal(id, dto)
    }
}