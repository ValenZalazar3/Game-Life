import { prisma } from "../../data/postgres";
import { CreateGoalDto, GoalDatasource, GoalEntity } from "../../domain";





export class GoalDatasourceImpl extends GoalDatasource {
    async create(createGoalDto: CreateGoalDto): Promise<GoalEntity> {
        const newGoal = await prisma.goal.create({ data: createGoalDto })

        return GoalEntity.fromObject(newGoal)
    }
    async getAllGoals(): Promise<GoalEntity[]> {
        const goal = await prisma.goal.findMany()
        return goal.map(goal => GoalEntity.fromObject(goal))
    }

}