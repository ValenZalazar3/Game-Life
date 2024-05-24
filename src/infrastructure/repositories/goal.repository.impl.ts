import { CreateGoalDto, GoalDatasource, GoalEntity, GoalRepository, UpdateGoalDto } from "../../domain";




export class GoalRepositoryImpl extends GoalRepository {

    constructor(
        private readonly datasource: GoalDatasource
    ) { super() }


    getAllGoals(): Promise<GoalEntity[]> {
        return this.datasource.getAllGoals()
    }

    create(createGoalDto: CreateGoalDto): Promise<GoalEntity> {
        return this.datasource.create(createGoalDto)
    }

    findGoalById(id: string): Promise<GoalEntity> {
        return this.datasource.findGoalById(id)
    }
    deleteGoal(id: string): Promise<GoalEntity> {
        return this.datasource.deleteGoal(id)
    }
    updateGoal(id: string, updateGoalDto: UpdateGoalDto): Promise<GoalEntity> {
        return this.datasource.updateGoal(id, updateGoalDto)
    }

}