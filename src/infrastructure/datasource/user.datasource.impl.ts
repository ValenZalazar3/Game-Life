import { prisma } from "../../data/postgres";
import { LoginUserDto, RegisterUserDto, UserDatasource } from "../../domain";
import { UserEntity } from "../../domain/entities/user.entity";



export class UserDatasourceImpl extends UserDatasource {


    async registerUser(dto: RegisterUserDto): Promise<UserEntity> {
        const user = await prisma.user.create({ data: dto });

        return UserEntity.fromObject(user)

    }

    loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    findOneByEmail(email: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}