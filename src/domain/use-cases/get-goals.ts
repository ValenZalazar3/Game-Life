
import { GoalEntity } from "../entities/goal.entity";
import { GoalRepository } from "../repositories/goal.repository";



interface GetGoalsUseCase {
    execute(): Promise<GoalEntity[]>
}

export class GetGoals implements GetGoalsUseCase {

    constructor(
        private readonly repository: GoalRepository
    ) { }

    execute(): Promise<GoalEntity[]> {
        return this.repository.getAllGoals()
    }
}




