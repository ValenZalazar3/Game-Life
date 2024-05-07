import { CreateGoalDto, GoalDatasource, GoalEntity, GoalRepository } from "../../domain";




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

}