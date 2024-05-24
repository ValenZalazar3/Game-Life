import { prisma } from "../../data/postgres";
import { CreateGoalDto, GoalDatasource, GoalEntity, UpdateGoalDto } from "../../domain";

export class GoalDatasourceImpl extends GoalDatasource {

    async create(createGoalDto: CreateGoalDto): Promise<GoalEntity> {
        const newGoal = await prisma.goal.create({ data: createGoalDto });
        return GoalEntity.fromObject(newGoal);
    }

    async getAllGoals(): Promise<GoalEntity[]> {
        const goals = await prisma.goal.findMany();
        return goals.map(goal => GoalEntity.fromObject(goal));
    }

    async findGoalById(id: string): Promise<GoalEntity> {
        const goal = await prisma.goal.findFirst({ where: { id } });

        if (!goal) throw `Goal with id ${id} not found`;

        return GoalEntity.fromObject(goal);
    }

    async updateGoal(id: string, updateGoalDto: UpdateGoalDto): Promise<GoalEntity> {
        const updatedGoal = await prisma.goal.update({
            where: { id },
            data: updateGoalDto.values,
        });

        return GoalEntity.fromObject(updatedGoal);
    }

    async deleteGoal(id: string): Promise<GoalEntity> {
        const deletedGoal = await prisma.goal.delete({
            where: { id },
        });

        return GoalEntity.fromObject(deletedGoal);
    }
}
