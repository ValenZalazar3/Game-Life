
import { GoalEntity } from "../entities/goal.entity";
import { GoalRepository } from "../repositories/goal.repository";



interface GetGoalByIdUseCase {
    execute(id: string): Promise<GoalEntity>
}

export class GetGoalById implements GetGoalByIdUseCase {

    constructor(
        private readonly repository: GoalRepository
    ) { }

    execute(id: string): Promise<GoalEntity> {
        return this.repository.findGoalById(id)
    }
}

