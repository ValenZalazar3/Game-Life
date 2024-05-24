import { GoalEntity } from "../entities/goal.entity";
import { GoalRepository } from "../repositories/goal.repository";



interface DeleteGoalUseCase {
    execute(id: string): Promise<GoalEntity>
}

export class DeleteGoal implements DeleteGoalUseCase {

    constructor(
        private readonly repository: GoalRepository
    ) { }

    execute(id: string): Promise<GoalEntity> {
        return this.repository.deleteGoal(id)
    }
}